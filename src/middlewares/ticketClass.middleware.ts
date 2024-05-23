// middlewares/ticketClass.middleware.ts
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { TICKET_CLASS_MESSAGES } from '../constants/messages'
import { TicketClassRequest } from '~/models/request/ticketClassRequest'

const ticketClassSchema = z.object({
  name: z
    .string()
    .min(3, { message: TICKET_CLASS_MESSAGES.NAME_MIN_LENGTH })
    .max(50, { message: TICKET_CLASS_MESSAGES.NAME_MAX_LENGTH }),
  description: z.string().optional()
})

export const createTicketClassValidator = async (request: FastifyRequest<TicketClassRequest>, reply: FastifyReply) => {
  const validationResult = ticketClassSchema.safeParse(request.body)

  if (!validationResult.success) {
    reply.code(400).send({ message: validationResult.error.issues[0].message })
    return false
  }

  return true
}

export const updateTicketClassValidator = async (request: FastifyRequest, reply: FastifyReply) => {
  const validationResult = ticketClassSchema.safeParse(request.body)

  if (!validationResult.success) {
    reply.code(400).send({ message: validationResult.error.issues[0].message })
    return false
  }

  return true
}
