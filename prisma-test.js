/* eslint-disable @typescript-eslint/no-require-imports */
// File: prisma-test.js
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  try {
    // Test connection
    await prisma.$connect()
    console.log('Successfully connected to the database')

    // Perform a simple query (adjust according to your schema)
    const socialData = await prisma.socialData.findFirst()
    console.log('Social Data:', socialData)

    // Close the connection
    await prisma.$disconnect()
  } catch (error) {
    console.error('Error:', error)
  }
}

main()