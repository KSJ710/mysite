import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';
import { useRouter } from 'next/router';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      if (req.query.prefectureId) {
        const cities: City[] = await prisma.city.findMany({
          where: {
            prefectureId: Number(req.query.prefectureId),
          },
        });
        res.status(200).json(cities);
        break;
      }
      const cities: City[] = await prisma.city.findMany();
      res.status(200).json(cities);
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
