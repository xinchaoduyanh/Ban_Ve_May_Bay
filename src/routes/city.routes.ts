// Trong file routes/city.route.ts

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import {
  createCityController,
  getCityByIdController,
  getCitiesController,
  updateCityController,
  deleteCityController
} from '../controllers/city.controller'
import { createCityValidator, updateCityValidator } from '~/middlewares/city.middleware'

export default async function (fastify: FastifyInstance) {
  fastify.post('/cities', {
    preValidation: createCityValidator,
    handler: createCityController
  })
  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: 'hahaha' })
  })
  fastify.get('/cities/:id', getCityByIdController)
  fastify.get('/cities/', getCitiesController)
  fastify.put('/cities/:id', {
    preValidation: updateCityValidator,
    handler: updateCityController
  })

  fastify.delete('/cities/:id', deleteCityController)
}
