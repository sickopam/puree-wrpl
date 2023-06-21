import { PrismaClient } from '@prisma/client'

export default async function userSetupSatu(req, res) {
    const prisma = new PrismaClient();
    const { email, phone, password } = req.body;

    if (req.method !== 'POST')  {
        res.status(500).json({ message: 'sorry' })
    }
    const response = await prisma.user.create({
        data: {
            email: email,
            phone: phone,
            password: password
        }
    })
    res.status(200).json(response)
}