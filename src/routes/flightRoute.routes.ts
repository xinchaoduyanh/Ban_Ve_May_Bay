import { FastifyInstance } from 'fastify'
import {
  createFlightRouteController,
  updateFlightRouteController,
  deleteFlightRouteController,
  getFlightRouteByIdController
} from '../controllers/flightRoute.controller'
import { createFlightRouteValidator, updateFlightRouteValidator } from '~/middlewares/flightRoute.middleware'

export const flightRouteRoutes = async (fastify: FastifyInstance) => {
  fastify.post('/flightRoutes', { preValidation: createFlightRouteValidator, handler: createFlightRouteController })
  fastify.put('/flightRoutes/:id', { preValidation: updateFlightRouteValidator, handler: updateFlightRouteController })
  fastify.delete('/flightRoutes/:id', deleteFlightRouteController)
  fastify.get('/flightRoutes/:id', getFlightRouteByIdController)
}
