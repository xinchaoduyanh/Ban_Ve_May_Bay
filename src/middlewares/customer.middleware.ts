import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { CUSTOMER_MESSAGES } from '../constants/messages'

const customerSchema = z.object({
  name: z
    .string()
    .min(3, { message: CUSTOMER_MESSAGES.NAME_MIN_LENGTH })
    .max(50, { message: CUSTOMER_MESSAGES.NAME_MAX_LENGTH }),
  dateOfBirth: z.date({ message: CUSTOMER_MESSAGES.DATE_OF_BIRTH_REQUIRED }),
  gender: z.string().min(1, { message: CUSTOMER_MESSAGES.GENDER_REQUIRED }),
  idNumber: z
    .string()
    .min(6, { message: CUSTOMER_MESSAGES.ID_NUMBER_MIN_LENGTH })
    .max(20, { message: CUSTOMER_MESSAGES.ID_NUMBER_MAX_LENGTH }),
  idType: z.string().min(1, { message: CUSTOMER_MESSAGES.ID_TYPE_REQUIRED }),
  nationality: z.string().min(1, { message: CUSTOMER_MESSAGES.NATIONALITY_REQUIRED })
})

export const createCustomerValidator = async (request: FastifyRequest, reply: FastifyReply) => {
  const validationResult = customerSchema.safeParse(request.body)

  if (!validationResult.success) {
    reply.code(400).send({ message: validationResult.error.issues[0].message })
    return false
  }

  return true
}

export const updateCustomerValidator = async (request: FastifyRequest, reply: FastifyReply) => {
  const validationResult = customerSchema.safeParse(request.body)

  if (!validationResult.success) {
    reply.code(400).send({ message: validationResult.error.issues[0].message })
    return false
  }

  return true
}
