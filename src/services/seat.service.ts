// services/seat.service.ts
import { PrismaClient } from '@prisma/client'
import { SEAT_MESSAGES } from '../constants/messages'
import { Seat } from '~/models/seat.model'

const prisma = new PrismaClient()

export const createSeat = async (seatData: Seat) => {
  try {
    const seat = await prisma.seat.create({
      data: seatData
    })
    return {
      message: SEAT_MESSAGES.SEAT_CREATED_SUCCESSFULLY,
      data: seat
    }
  } catch (error) {
    console.error('Error creating seat:', error)
    throw new Error('Failed to create seat')
  }
}

export const updateSeat = async (seatId: string, seatData: Seat) => {
  try {
    const updatedSeat = await prisma.seat.update({
      where: { id: seatId },
      data: seatData
    })
    return {
      message: SEAT_MESSAGES.SEAT_UPDATED_SUCCESSFULLY,
      data: updatedSeat
    }
  } catch (error) {
    console.error('Error updating seat:', error)
    throw new Error('Failed to update seat')
  }
}

export const deleteSeat = async (seatId: string) => {
  try {
    await prisma.seat.delete({
      where: { id: seatId }
    })
    return {
      message: SEAT_MESSAGES.SEAT_DELETED_SUCCESSFULLY
    }
  } catch (error) {
    console.error('Error deleting seat:', error)
    throw new Error('Failed to delete seat')
  }
}

export const getSeatById = async (seatId: string) => {
  try {
    const seat = await prisma.seat.findUnique({
      where: { id: seatId }
    })
    if (!seat) {
      throw new Error('Seat not found')
    }
    return {
      message: SEAT_MESSAGES.SEAT_FETCHED_SUCCESSFULLY,
      data: seat
    }
  } catch (error) {
    console.error('Error fetching seat:', error)
    throw new Error('Failed to fetch seat')
  }
}
