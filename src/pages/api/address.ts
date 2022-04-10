import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function address(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await prisma.prefecture.findMany({ include: { cities: true } });
  res.status(200).json(data);
}
