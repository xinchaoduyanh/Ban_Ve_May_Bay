import { FastifyInstance } from 'fastify'
import {
  createTicketClassController,
  deleteTicketClassController,
  getTicketClassByIdController,
  updateTicketClassController
} from '~/controllers/ticketClass.controller'
import { createTicketClassValidator, updateTicketClassValidator } from '~/middlewares/ticketClass.middleware'

export const ticketClassRoutes = async (fastify: FastifyInstance) => {
  fastify.post('/', { preValidation: createTicketClassValidator, handler: createTicketClassController })
  fastify.put('/:id', { preValidation: updateTicketClassValidator, handler: updateTicketClassController })
  fastify.delete('/:id', deleteTicketClassController)
  fastify.get('/:id', getTicketClassByIdController)
}
