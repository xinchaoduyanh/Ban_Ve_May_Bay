// services/ticketClass.service.ts
import { PrismaClient } from '@prisma/client'
import { TICKET_CLASS_MESSAGES } from '../constants/messages'
import { TicketClass } from '~/models/ticketClass.model'

const prisma = new PrismaClient()

export const createTicketClass = async (ticketClassData: TicketClass) => {
  try {
    const ticketClass = await prisma.ticketClass.create({
      data: ticketClassData
    })
    return {
      message: TICKET_CLASS_MESSAGES.TICKET_CLASS_CREATED_SUCCESSFULLY,
      data: ticketClass
    }
  } catch (error) {
    console.error('Error creating ticket class:', error)
    throw new Error('Failed to create ticket class')
  }
}

export const updateTicketClass = async (ticketClassId: string, ticketClassData: TicketClass) => {
  try {
    const updatedTicketClass = await prisma.ticketClass.update({
      where: { id: ticketClassId },
      data: ticketClassData
    })
    return {
      message: TICKET_CLASS_MESSAGES.TICKET_CLASS_UPDATED_SUCCESSFULLY,
      data: updatedTicketClass
    }
  } catch (error) {
    console.error('Error updating ticket class:', error)
    throw new Error('Failed to update ticket class')
  }
}

export const deleteTicketClass = async (ticketClassId: string) => {
  try {
    await prisma.ticketClass.delete({
      where: { id: ticketClassId }
    })
    return {
      message: TICKET_CLASS_MESSAGES.TICKET_CLASS_DELETED_SUCCESSFULLY
    }
  } catch (error) {
    console.error('Error deleting ticket class:', error)
    throw new Error('Failed to delete ticket class')
  }
}

export const getTicketClassById = async (ticketClassId: string) => {
  try {
    const ticketClass = await prisma.ticketClass.findUnique({
      where: { id: ticketClassId }
    })
    if (!ticketClass) {
      throw new Error('Ticket class not found')
    }
    return {
      message: TICKET_CLASS_MESSAGES.TICKET_CLASS_FETCHED_SUCCESSFULLY,
      data: ticketClass
    }
  } catch (error) {
    console.error('Error fetching ticket class:', error)
    throw new Error('Failed to fetch ticket class')
  }
}
