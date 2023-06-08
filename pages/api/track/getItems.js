import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GetOrders(req, res) {
    const { itemName, merchantName } = req.query

    try {
        const orders = await prisma.orders.findFirst({
            where: {
                name: itemName,
                Merchant: {
                    User: {
                        name: merchantName
                    }
                }
            }
        }) 
        
        if (!orders) {
            return res.status(404).json({ success: false, message: 'Item not found'})
        }
        res.status(200).json({success: true, orders})
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
}