import { FastifyInstance } from 'fastify'
import {
  createTicketController,
  deleteTicketController,
  getTicketByIdController,
  updateTicketController
} from '~/controllers/ticket.controller'
import { createTicketValidator, updateTicketValidator } from '~/middlewares/ticket.middleware'

export const ticketRoutes = async (fastify: FastifyInstance) => {
  fastify.post('/', { preValidation: createTicketValidator, handler: createTicketController })
  fastify.put('/:id', { preValidation: updateTicketValidator, handler: updateTicketController })
  fastify.delete('/:id', deleteTicketController)
  fastify.get('/:id', getTicketByIdController)
}
