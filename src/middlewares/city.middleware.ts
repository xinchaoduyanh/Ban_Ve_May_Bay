// Trong file validators/city.validator.ts

import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { CITY_MESSAGES } from '../constants/messages'

const citySchema = z.object({
  name: z.string().min(3, { message: CITY_MESSAGES.NAME_MIN_LENGTH }),
  country: z.string().min(3, { message: CITY_MESSAGES.COUNTRY_MIN_LENGTH })
})

export const createCityValidator = async (request: FastifyRequest, reply: FastifyReply) => {
  const validationResult = citySchema.safeParse(request.body)

  if (!validationResult.success) {
    reply.code(400).send({ message: validationResult.error.errors })
    return false
  }

  return true
}

export const updateCityValidator = async (request: FastifyRequest, reply: FastifyReply) => {
  const validationResult = citySchema.safeParse(request.body)

  if (!validationResult.success) {
    reply.code(400).send({ message: validationResult.error.errors })
    return false
  }

  return true
}
