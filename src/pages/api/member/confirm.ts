import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      const { name, token } = req.body;

      const tmpMember = await prisma.member.findFirst({
        where: {
          name: name,
          confirmToken: token,
        },
      });
      const member = await prisma.member.update({
        where: {
          email: tmpMember.email,
        },
        data: { confirmStatus: '1' },
      });

      console.log('------------------------------');
      console.log(member);
      if (member) res.redirect(302, '/login?confirm=success');
      res.redirect(302, '/home?confirm=fail');
      break;

    default:
      res.status(404).end();
      break;
  }
}
