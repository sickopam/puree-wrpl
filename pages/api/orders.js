import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const order = JSON.parse(req.body);
    const savedOrder = await prisma.order.create({ data: order });
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};