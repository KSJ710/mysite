import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function Sample(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      if (req.query.index === 'show') {
        res.status(200).json({ message: 'GET_SHOW' });
        break;
      }
      res.status(200).json({ message: 'GET_INDEX' });
      break;

    case 'POST':
      res.status(200).json({ message: 'POST' });
      break;

    case 'PATCH':
      res.status(200).json({ message: 'PATCH' });
      break;

    case 'DELETE':
      res.status(200).json({ message: 'DELETE' });
      break;

    default:
      res.status(405).end();
      break;
  }
}
