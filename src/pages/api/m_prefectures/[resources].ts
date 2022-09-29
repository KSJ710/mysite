import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const prefectures: Prefecture[] = await prisma.prefecture.findMany();
      res.status(200).json(prefectures);
      break;

    // case 'POST':
    //  res.status(200).json({ message: 'PATCH' });
    //  break;

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
