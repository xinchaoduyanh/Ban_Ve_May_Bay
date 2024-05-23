// middlewares/ticket.middleware.ts
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { TICKET_MESSAGES } from '../constants/messages'
import { CreateTicketRequest, UpdateTicketRequest } from '~/models/request/ticketRequest'

const ticketSchema = z.object({
  flightId: z.string().min(1, { message: TICKET_MESSAGES.FLIGHT_ID_REQUIRED }),
  classId: z.string().min(1, { message: TICKET_MESSAGES.CLASS_ID_REQUIRED }),
  customerId: z.string().min(1, { message: TICKET_MESSAGES.CUSTOMER_ID_REQUIRED }),
  purchaseDate: z.date({ message: TICKET_MESSAGES.PURCHASE_DATE_REQUIRED }),
  price: z.number().min(0, { message: TICKET_MESSAGES.PRICE_MIN_VALUE })
})

export const createTicketValidator = async (request: FastifyRequest<CreateTicketRequest>, reply: FastifyReply) => {
  const validationResult = ticketSchema.safeParse(request.body)

  if (!validationResult.success) {
    reply.code(400).send({ message: validationResult.error.issues[0].message })
    return false
  }

  return true
}

export const updateTicketValidator = async (request: FastifyRequest<UpdateTicketRequest>, reply: FastifyReply) => {
  const validationResult = ticketSchema.safeParse(request.body)

  if (!validationResult.success) {
    reply.code(400).send({ message: validationResult.error.issues[0].message })
    return false
  }

  return true
}
