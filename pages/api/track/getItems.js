import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getStaticProps(req, res) {
    const { itemName, merchantName } = req.query

    try {
        const item = await prisma.item.findFirst({
            where: {
                name: itemName,
                Item: {
                    Merchant: {
                        name: merchantName
                    }
                }
            }
        }) 
        
        if (!orders) {
            return res.status(404).json({ success: false, message: 'Item not found'})
        }
        res.status(200).json({success: true, item})
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
}