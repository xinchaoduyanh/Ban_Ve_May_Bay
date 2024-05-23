// controllers/ticket.controller.ts
import { FastifyRequest, FastifyReply } from 'fastify'
import { createTicketValidator, updateTicketValidator } from '../middlewares/ticket.middleware'
import { CreateTicketRequest, DeleteOrGetByIdTicketRequest, UpdateTicketRequest } from '~/models/request/ticketRequest'
import { createTicket, updateTicket, deleteTicket, getTicketById } from '~/services/ticket.service'

export const createTicketController = async (request: FastifyRequest<CreateTicketRequest>, reply: FastifyReply) => {
  const validationResult = await createTicketValidator(request, reply)
  if (validationResult) {
    const ticket = await createTicket(request.body)
    reply.send(ticket)
  }
}

export const updateTicketController = async (request: FastifyRequest<UpdateTicketRequest>, reply: FastifyReply) => {
  const validationResult = await updateTicketValidator(request, reply)
  if (validationResult) {
    const ticket = await updateTicket(request.params.id, request.body)
    reply.send(ticket)
  }
}

export const deleteTicketController = async (
  request: FastifyRequest<DeleteOrGetByIdTicketRequest>,
  reply: FastifyReply
) => {
  const ticket = await deleteTicket(request.params.id)
  reply.send(ticket)
}

export const getTicketByIdController = async (
  request: FastifyRequest<DeleteOrGetByIdTicketRequest>,
  reply: FastifyReply
) => {
  const ticket = await getTicketById(request.params.id)
  reply.send(ticket)
}
