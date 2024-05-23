// middlewares/seat.middleware.ts
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { SEAT_MESSAGES } from '../constants/messages'

const seatSchema = z.object({
  flightId: z.string().min(1, { message: SEAT_MESSAGES.FLIGHT_ID_REQUIRED }),
  classId: z.string().min(1, { message: SEAT_MESSAGES.CLASS_ID_REQUIRED }),
  isAvailable: z.boolean().optional()
})

export const createSeatValidator = async (request: FastifyRequest, reply: FastifyReply) => {
  const validationResult = seatSchema.safeParse(request.body)

  if (!validationResult.success) {
    reply.code(400).send({ message: validationResult.error.issues[0].message })
    return false
  }

  return true
}

export const updateSeatValidator = async (request: FastifyRequest, reply: FastifyReply) => {
  const validationResult = seatSchema.safeParse(request.body)

  if (!validationResult.success) {
    reply.code(400).send({ message: validationResult.error.issues[0].message })
    return false
  }

  return true
}
