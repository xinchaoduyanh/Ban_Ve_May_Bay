import { FastifyRequest, FastifyReply } from 'fastify'
import { createFlightRouteValidator, updateFlightRouteValidator } from '../middlewares/flightRoute.middleware'
import {
  createFlightRoute,
  updateFlightRoute,
  deleteFlightRoute,
  getFlightRouteById
} from '../services/flightRoute.service'
import {
  DeleteOrGetyByIdFlightRouteRequest,
  UpdateFlightRouteRequest,
  CreateFlightRouteRequest
} from '~/models/request/flightRouteRequest'

export const createFlightRouteController = async (
  request: FastifyRequest<CreateFlightRouteRequest>,
  reply: FastifyReply
) => {
  const validationResult = await createFlightRouteValidator(request, reply)
  if (validationResult) {
    const flightRoute = await createFlightRoute(request.body)
    reply.send(flightRoute)
  }
}

export const updateFlightRouteController = async (
  request: FastifyRequest<UpdateFlightRouteRequest>,
  reply: FastifyReply
) => {
  const validationResult = await updateFlightRouteValidator(request, reply)
  if (validationResult) {
    const flightRoute = await updateFlightRoute(request.params.id, request.body)
    reply.send(flightRoute)
  }
}

export const deleteFlightRouteController = async (
  request: FastifyRequest<DeleteOrGetyByIdFlightRouteRequest>,
  reply: FastifyReply
) => {
  const flightRoute = await deleteFlightRoute(request.params.id)
  reply.send(flightRoute)
}

export const getFlightRouteByIdController = async (
  request: FastifyRequest<DeleteOrGetyByIdFlightRouteRequest>,
  reply: FastifyReply
) => {
  const flightRoute = await getFlightRouteById(request.params.id)
  reply.send(flightRoute)
}
