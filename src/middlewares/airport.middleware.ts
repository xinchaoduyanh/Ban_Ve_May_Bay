// Trong file validators/airport.validator.ts

import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { AIRPORT_MESSAGES } from '../constants/messages'
import { UpdateAirportRequest } from '~/models/request/airportRequest'

const airportSchema = z.object({
  code: z
    .string()
    .min(3, { message: AIRPORT_MESSAGES.CODE_MIN_LENGTH })
    .max(10, { message: AIRPORT_MESSAGES.CODE_MAX_LENGTH }),
  name: z
    .string()
    .min(3, { message: AIRPORT_MESSAGES.NAME_MIN_LENGTH })
    .max(50, { message: AIRPORT_MESSAGES.NAME_MAX_LENGTH }),
  address: z
    .string()
    .min(3, { message: AIRPORT_MESSAGES.ADDRESS_MIN_LENGTH })
    .max(100, { message: AIRPORT_MESSAGES.ADDRESS_MAX_LENGTH }),
  city: z
    .string()
    .min(2, { message: AIRPORT_MESSAGES.CITY_MIN_LENGTH })
    .max(50, { message: AIRPORT_MESSAGES.CITY_MAX_LENGTH }),
  description: z.string().optional()
})

export const createAirportValidator = async (request: FastifyRequest, reply: FastifyReply) => {
  const validationResult = airportSchema.safeParse(request.body)

  if (!validationResult.success) {
    reply.code(400).send({ message: validationResult.error.errors })
    return false
  }

  return true
}

export const updateAirportValidator = async (request: FastifyRequest<UpdateAirportRequest>, reply: FastifyReply) => {
  const validationResult = airportSchema.safeParse(request.body)
  if (!validationResult.success) {
    reply.code(400).send({ message: validationResult.error.errors })
    return false
  }
  return true
}
