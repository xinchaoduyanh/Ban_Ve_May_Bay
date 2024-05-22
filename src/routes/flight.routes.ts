import { FastifyInstance } from 'fastify'
import {
  createFlightController,
  updateFlightController,
  deleteFlightController,
  getFlightByIdController
} from '../controllers/flight.controller'
import { createFlightValidator, updateFlightValidator } from '~/middlewares/flight.middleware'

export default async function (fastify: FastifyInstance) {
  fastify.post('/createflight', {
    preValidation: createFlightValidator,
    handler: createFlightController
  })

  fastify.put('/flights/:id', {
    preValidation: updateFlightValidator,
    handler: updateFlightController
  })

  fastify.delete('/flights/:id', deleteFlightController)

  fastify.get('/flights/:id', getFlightByIdController)
}
