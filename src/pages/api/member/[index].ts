import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';
import bcrypt from 'bcrypt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    // case 'GET':
    //   if (req.query.index === 'show') {
    //     res.status(200).json({ message: 'GET_SHOW' });
    //     break;
    //   }
    //   res.status(200).json({ message: 'GET_INDEX' });
    //   break;

    case 'POST':
      const saltRounds = 10;
      bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
        if (err) res.redirect(303, '/member/new?result=error');

        try {
          const member = await prisma.member.create({
            data: {
              name: req.body.name,
              email: req.body.email,
              password: hash,
            },
          });
          res.status(200).json(member);
        } catch (e) {
          console.log('Prismaエラーコード：' + e.code);
          res.redirect(303, '/member/new?result=error');
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
