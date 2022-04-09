import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      // if (req.query.resources === 'show') {
      //   break;
      // }
      const sampleList = await prisma.sampleList.findMany();
      res.status(200).json(sampleList);
      break;

    // case 'POST':
    //   break;

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
