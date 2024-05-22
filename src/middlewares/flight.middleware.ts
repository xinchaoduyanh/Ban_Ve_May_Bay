import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { FLIGHT_MESSAGES } from '../constants/messages'

const flightSchema = z.object({
  routeId: z.string().min(1, { message: FLIGHT_MESSAGES.ROUTE_ID_REQUIRED }),
  departureTime: z
    .string()
    .refine((value) => !isNaN(Date.parse(value)), { message: FLIGHT_MESSAGES.DEPARTURE_TIME_REQUIRED }),
  arrivalTime: z
    .string()
    .refine((value) => !isNaN(Date.parse(value)), { message: FLIGHT_MESSAGES.ARRIVAL_TIME_REQUIRED }),
  aircraftType: z.string().min(3, { message: FLIGHT_MESSAGES.AIRCRAFT_TYPE_MIN_LENGTH }),
  description: z.string().optional()
})
export const createFlightValidator = async (request: FastifyRequest, reply: FastifyReply) => {
  const validationResult = flightSchema.safeParse(request.body)

  if (!validationResult.success) {
    reply.code(400).send({ message: validationResult.error.issues[0].message })
    return false
  }

  return true
}

export const updateFlightValidator = async (request: FastifyRequest, reply: FastifyReply) => {
  const validationResult = flightSchema.safeParse(request.body)

  if (!validationResult.success) {
    reply.code(400).send({ message: validationResult.error.issues[0].message })
    return false
  }

  return true
}
