import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import { getCsrfToken } from 'next-auth/react';
import { html, text } from 'src/mails/signup';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      if (req.query.resources === 'show') {
        let member = await prisma.member.findUnique({
          where: { email: req.query.email },
        });
        res.status(200).json(member);
        break;
      }
      res.status(200).json({ message: 'GET_INDEX' });
      break;

    case 'POST':
      const saltRounds = 10;
      let confirmExpiresAt = new Date();
      confirmExpiresAt.setMinutes(confirmExpiresAt.getMinutes() + 20);
      bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
        if (err) res.redirect(302, '/member/new?result=error');

        try {
          const member = await prisma.member.create({
            data: {
              name: req.body.name,
              email: req.body.email,
              password: hash,
              confirmToken: await getCsrfToken({ req }),
              confirmExpiresAt: confirmExpiresAt,
              confirmStatus: '0',
            },
          });
          await sendConfirmMail(
            member.email,
            html({
              url: `${process.env.LOCAL_URL}/api/member/confirm?name=${member.name}&token=${member.confirmToken}`,
            }),
            text({
              url: `${process.env.LOCAL_URL}/api/member/confirm?name=${member.name}&token=${member.confirmToken}`,
            })
          );

          res.status(200).json(member);
        } catch (e) {
          console.log('Prismaエラーコード：' + e.code);
          console.error(e);
          res.redirect(302, '/member/new?result=error');
        } finally {
          prisma.$disconnect;
        }
      });
      break;

    // case 'PATCH':
    //   res.status(200).json({ message: 'PATCH' });
    //   break;

    // case 'DELETE':
    //   res.status(200).json({ message: 'DELETE' });
    //   break;

    default:
      res.status(404).end();
      break;
  }
}

async function sendConfirmMail(email, html, text) {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  return await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: '仮アカウント登録のお知らせ',
    text: text,
    html: html,
  });
}
