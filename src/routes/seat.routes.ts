import { FastifyInstance } from 'fastify'
import {
  createSeatController,
  deleteSeatController,
  getSeatByIdController,
  updateSeatController
} from '~/controllers/seat.controller'
import { createSeatValidator, updateSeatValidator } from '~/middlewares/seat.middleware'

export const seatRoutes = async (fastify: FastifyInstance) => {
  fastify.post('/', { preValidation: createSeatValidator, handler: createSeatController })
  fastify.put('/:id', { preValidation: updateSeatValidator, handler: updateSeatController })
  fastify.delete('/:id', deleteSeatController)
  fastify.get('/:id', getSeatByIdController)
}
