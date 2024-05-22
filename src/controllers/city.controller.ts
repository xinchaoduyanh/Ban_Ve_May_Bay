// Trong file controllers/city.controller.ts

import { FastifyRequest, FastifyReply } from 'fastify'
import { createCity, updateCity, deleteCity, getCityById } from '../services/city.service'
import { City } from '~/models/city.model'
import { UpdateCityRequest } from '~/models/request/cityRequest'

export const createCityController = async (request: FastifyRequest, reply: FastifyReply) => {
  const city = await createCity(request.body as City)
  reply.send(city)
}

export const getCityByIdController = async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.params as { id: string }
  const city = await getCityById(id)
  reply.send(city)
}

export const getCitiesController = async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.params as { id: string }
  const city = await getCityById(id)
  reply.send(city)
}

export const updateCityController = async (request: FastifyRequest<UpdateCityRequest>, reply: FastifyReply) => {
  const { id } = request.params as { id: string }
  const updatedCity = await updateCity(id, request.body)
  reply.send(updatedCity)
}

export const deleteCityController = async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.params as { id: string }
  await deleteCity(id)
  reply.send({ message: 'City deleted successfully' })
}
