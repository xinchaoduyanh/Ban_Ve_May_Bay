import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { FLIGHT_ROUTE_MESSAGES } from '../constants/messages'
import { createFlightRouteRequest } from '~/models/request/flightRouteRequest'

const flightRouteSchema = z.object({
  departureAirportId: z.string().min(1, { message: FLIGHT_ROUTE_MESSAGES.FLIGHT_ROUTE_NOT_FOUND }),
  arrivalAirportId: z.string().min(1, { message: FLIGHT_ROUTE_MESSAGES.FLIGHT_ROUTE_NOT_FOUND }),
  description: z.string().optional()
})

export const createFlightRouteValidator = async (
  request: FastifyRequest<createFlightRouteRequest>,
  reply: FastifyReply
) => {
  const validationResult = flightRouteSchema.safeParse(request.body)
  if (!validationResult.success) {
    reply.code(400).send({ message: validationResult.error.issues[0].message })
    return false
  }

  return true
}

export const updateFlightRouteValidator = async (request: FastifyRequest, reply: FastifyReply) => {
  const validationResult = flightRouteSchema.safeParse(request.body)

  if (!validationResult.success) {
    reply.code(400).send({ message: validationResult.error.issues[0].message })
    return false
  }

  return true
}
