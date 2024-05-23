// controllers/seat.controller.ts
import { FastifyRequest, FastifyReply } from 'fastify'
import { createSeatValidator, updateSeatValidator } from '../middlewares/seat.middleware'
import { createSeat, updateSeat, deleteSeat, getSeatById } from '../services/seat.service'
import { CreateSeatRequest, DeleteOrGetByIdSeatRequest, UpdateSeatRequest } from '~/models/request/seatRequest'

export const createSeatController = async (request: FastifyRequest<CreateSeatRequest>, reply: FastifyReply) => {
  const validationResult = await createSeatValidator(request, reply)
  if (validationResult) {
    const seat = await createSeat(request.body)
    reply.send(seat)
  }
}

export const updateSeatController = async (request: FastifyRequest<UpdateSeatRequest>, reply: FastifyReply) => {
  const validationResult = await updateSeatValidator(request, reply)
  if (validationResult) {
    const seat = await updateSeat(request.params.id, request.body)
    reply.send(seat)
  }
}

export const deleteSeatController = async (
  request: FastifyRequest<DeleteOrGetByIdSeatRequest>,
  reply: FastifyReply
) => {
  const seat = await deleteSeat(request.params.id)
  reply.send(seat)
}

export const getSeatByIdController = async (
  request: FastifyRequest<DeleteOrGetByIdSeatRequest>,
  reply: FastifyReply
) => {
  const seat = await getSeatById(request.params.id)
  reply.send(seat)
}
