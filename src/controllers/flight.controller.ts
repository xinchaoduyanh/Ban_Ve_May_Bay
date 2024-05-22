import { FastifyRequest, FastifyReply } from 'fastify'

import { createFlight, updateFlight, deleteFlight, getFlightById } from '../services/flight.service'
import { CreateFlightRequest, UpdateFlightRequest, DeleteOrGetByIdFlightRequest } from '../models/request/flightRequest'
import { createFlightValidator, updateFlightValidator } from '~/middlewares/flight.middleware'

export const createFlightController = async (request: FastifyRequest<CreateFlightRequest>, reply: FastifyReply) => {
  const validationResult = await createFlightValidator(request, reply)
  if (validationResult) {
    const flight = await createFlight(request.body)
    reply.send(flight)
  }
}

export const updateFlightController = async (request: FastifyRequest<UpdateFlightRequest>, reply: FastifyReply) => {
  const validationResult = await updateFlightValidator(request, reply)
  if (validationResult) {
    const flight = await updateFlight(request.params.id, request.body)
    reply.send(flight)
  }
}

export const deleteFlightController = async (
  request: FastifyRequest<DeleteOrGetByIdFlightRequest>,
  reply: FastifyReply
) => {
  const flight = await deleteFlight(request.params.id)
  reply.send(flight)
}

export const getFlightByIdController = async (
  request: FastifyRequest<DeleteOrGetByIdFlightRequest>,
  reply: FastifyReply
) => {
  const flight = await getFlightById(request.params.id)
  reply.send(flight)
}
