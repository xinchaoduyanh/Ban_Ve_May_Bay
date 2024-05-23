// controllers/ticketClass.controller.ts
import { FastifyRequest, FastifyReply } from 'fastify'
import { createTicketClassValidator, updateTicketClassValidator } from '../middlewares/ticketClass.middleware'
import {
  createTicketClass,
  updateTicketClass,
  deleteTicketClass,
  getTicketClassById
} from '../services/ticketClass.service'
import {
  DeleteTicketClassRequest,
  TicketClassRequest,
  updateTicketClassRequest
} from '~/models/request/ticketClassRequest'

export const createTicketClassController = async (request: FastifyRequest<TicketClassRequest>, reply: FastifyReply) => {
  const validationResult = await createTicketClassValidator(request, reply)
  if (validationResult) {
    const ticketClass = await createTicketClass(request.body)
    reply.send(ticketClass)
  }
}

export const updateTicketClassController = async (
  request: FastifyRequest<updateTicketClassRequest>,
  reply: FastifyReply
) => {
  const validationResult = await updateTicketClassValidator(request, reply)
  if (validationResult) {
    const ticketClass = await updateTicketClass(request.params.id, request.body)
    reply.send(ticketClass)
  }
}

export const deleteTicketClassController = async (
  request: FastifyRequest<DeleteTicketClassRequest>,
  reply: FastifyReply
) => {
  const ticketClass = await deleteTicketClass(request.params.id)
  reply.send(ticketClass)
}

export const getTicketClassByIdController = async (
  request: FastifyRequest<DeleteTicketClassRequest>,
  reply: FastifyReply
) => {
  const ticketClass = await getTicketClassById(request.params.id)
  reply.send(ticketClass)
}
