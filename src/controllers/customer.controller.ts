import { FastifyRequest, FastifyReply } from 'fastify'
import { createCustomerValidator, updateCustomerValidator } from '../middlewares/customer.middleware'
import { createCustomer, updateCustomer, deleteCustomer, getCustomerById } from '../services/customer.service'
import {
  CreateCustomerRequest,
  DeleteOrGetByIdCustomerRequest,
  UpdateCustomerRequest
} from '~/models/request/customerRequest'

export const createCustomerController = async (request: FastifyRequest<CreateCustomerRequest>, reply: FastifyReply) => {
  const validationResult = await createCustomerValidator(request, reply)
  if (validationResult) {
    const customer = await createCustomer(request.body)
    reply.send(customer)
  }
}

export const updateCustomerController = async (request: FastifyRequest<UpdateCustomerRequest>, reply: FastifyReply) => {
  const validationResult = await updateCustomerValidator(request, reply)
  if (validationResult) {
    const customer = await updateCustomer(request.params.id, request.body)
    reply.send(customer)
  }
}

export const deleteCustomerController = async (
  request: FastifyRequest<DeleteOrGetByIdCustomerRequest>,
  reply: FastifyReply
) => {
  const customer = await deleteCustomer(request.params.id)
  reply.send(customer)
}

export const getCustomerByIdController = async (
  request: FastifyRequest<DeleteOrGetByIdCustomerRequest>,
  reply: FastifyReply
) => {
  const customer = await getCustomerById(request.params.id)
  reply.send(customer)
}
