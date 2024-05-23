import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import {
  createCustomerController,
  deleteCustomerController,
  getCustomerByIdController,
  updateCustomerController
} from '~/controllers/customer.controller'
import { createCustomerValidator, updateCustomerValidator } from '~/middlewares/customer.middleware'

export default async function (fastify: FastifyInstance) {
  fastify.post('/', {
    preValidation: createCustomerValidator,
    handler: createCustomerController
  })

  fastify.get('/:id', getCustomerByIdController)
  // fastify.get('/', getCustomer)
  fastify.put('/:id', {
    preValidation: updateCustomerValidator,
    handler: updateCustomerController
  })

  fastify.delete('/:id', deleteCustomerController)
}
