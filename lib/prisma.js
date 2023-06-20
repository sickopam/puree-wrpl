const { PrismaClient } = require("@prisma/client");

export async function getServerSideProps() {
    const prisma = new PrismaClient()
}