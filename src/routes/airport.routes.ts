import { FastifyInstance } from 'fastify'
import {
  createAirportController,
  getAirportController,
  updateAirportController,
  deleteAirportController
} from '../controllers/airport.controller'
import { createAirportValidator, updateAirportValidator } from '~/middlewares/airport.middleware'

export default async function (fastify: FastifyInstance) {
  fastify.post('/createAirport', {
    preValidation: createAirportValidator,
    handler: createAirportController
  })
  fastify.get('/getAirport/:id', getAirportController)

  fastify.patch('/updateAirport/:id', {
    preValidation: updateAirportValidator,
    handler: updateAirportController
  })

  fastify.delete('/deleteAirport/:id', deleteAirportController)
}
