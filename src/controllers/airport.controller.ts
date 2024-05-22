import { FastifyRequest, FastifyReply } from 'fastify'
import { createAirport, getAirport, updateAirport, deleteAirport } from '../services/airport.service'
import { Airport } from '../models/airport.model'
import { UpdateAirportRequest, createAirportRequest } from '~/models/request/airportRequest'

export const createAirportController = async (request: FastifyRequest<createAirportRequest>, reply: FastifyReply) => {
  const airport = await createAirport(request.body)
  reply.send(airport)
}

export const getAirportController = async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.params as { id: string }
  const airport = await getAirport(id)
  reply.send(airport)
}

export const updateAirportController = async (request: FastifyRequest<UpdateAirportRequest>, reply: FastifyReply) => {
  const { id } = request.params as { id: string }
  const airport = await updateAirport(id, request.body)
  reply.send(airport)
}

export const deleteAirportController = async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.params as { id: string }
  const result = await deleteAirport(id)
  reply.send(result)
}
