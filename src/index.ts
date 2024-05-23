// index.ts

import fastify, { FastifyInstance } from 'fastify'
import { PrismaClient } from '@prisma/client'
import { envConfig } from './constants/config'
import airportRoutes from './routes/airport.routes'
import cityRoutes from './routes/city.routes'
import { flightRouteRoutes } from './routes/flightRoute.routes'
import flightRoutes from './routes/flight.routes'
import { ticketClassRoutes } from './routes/ticketClass.routes'
import { ticketRoutes } from './routes/ticket.routes'
import { seatRoutes } from './routes/seat.routes'

const app: FastifyInstance = fastify()

// Tạo một instance của PrismaClient
const prisma = new PrismaClient()

// Đăng ký routes
app.register(airportRoutes, { prefix: '/airport', prisma })
app.register(cityRoutes, { prefix: '/city', prisma })
app.register(flightRouteRoutes, { prefix: '/flightRoute', prisma })
app.register(flightRoutes, { prefix: '/flight', prisma })
app.register(ticketClassRoutes, { prefix: '/ticketClass', prisma })
app.register(ticketRoutes, { prefix: '/ticket', prisma })
app.register(seatRoutes, { prefix: '/seat', prisma })
// Start server
const start = async () => {
  try {
    const port = Number(envConfig.port)
    await app.listen({ port: port })
    console.log(`Server is running on port ${port} `)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
