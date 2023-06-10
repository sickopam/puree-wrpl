const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = async function (req, res) {
  try {
    const orderId = req.query.orderId;

    const orders = await prisma.order.findMany({
      where: {
        id: orderId,
      },
      include: {
        OrderItem: {
          include: {
            Item: {
              include: {
                Merchant: {
                  include: {
                    User: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (orders.length === 0) {
      res.status(404).json({ error: "Order not found" });
      return;
    }

    const order = orders[0];

    const responseData = {
      merchantName: order.OrderItem[0].Item.Merchant.User.name,
      items: order.OrderItem.map(function (orderItem) {
        return {
          name: orderItem.Item.name,
          price: orderItem.Item.price,
        };
      }),
    };

    res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
