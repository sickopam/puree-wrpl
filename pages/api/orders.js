// pages/api/orders.js

import prisma from '../../lib/prisma';

export default async function handler(req, res) {
    const {PrismaClient} = require('@prisma/client')
    const prisma = new PrismaClient()
    const {orderId} = req.query.orderId;

  const order = await prisma.order.findMany({
    where: {
      id: orderId,
    },
    include: {
      OrderItem: {
        include: {
          Item: {
            include: {
              Merchant: true,
            },
          },
        },
      },
    },
  });

  res.status(200).json(order);
}
