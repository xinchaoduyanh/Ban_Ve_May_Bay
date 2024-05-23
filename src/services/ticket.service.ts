// services/ticket.service.ts
import { PrismaClient } from '@prisma/client'
import { TICKET_MESSAGES } from '../constants/messages'
import { Ticket } from '~/models/ticket.model'

const prisma = new PrismaClient()

export const createTicket = async (ticketData: Ticket) => {
  try {
    const ticket = await prisma.ticket.create({
      data: ticketData
    })
    return {
      message: TICKET_MESSAGES.TICKET_CREATED_SUCCESSFULLY,
      data: ticket
    }
  } catch (error) {
    console.error('Error creating ticket:', error)
    throw new Error('Failed to create ticket')
  }
}

export const updateTicket = async (ticketId: string, ticketData: Ticket) => {
  try {
    const updatedTicket = await prisma.ticket.update({
      where: { id: ticketId },
      data: ticketData
    })
    return {
      message: TICKET_MESSAGES.TICKET_UPDATED_SUCCESSFULLY,
      data: updatedTicket
    }
  } catch (error) {
    console.error('Error updating ticket:', error)
    throw new Error('Failed to update ticket')
  }
}

export const deleteTicket = async (ticketId: string) => {
  try {
    await prisma.ticket.delete({
      where: { id: ticketId }
    })
    return {
      message: TICKET_MESSAGES.TICKET_DELETED_SUCCESSFULLY
    }
  } catch (error) {
    console.error('Error deleting ticket:', error)
    throw new Error('Failed to delete ticket')
  }
}

export const getTicketById = async (ticketId: string) => {
  try {
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId }
    })
    if (!ticket) {
      throw new Error('Ticket not found')
    }
    return {
      message: TICKET_MESSAGES.TICKET_FETCHED_SUCCESSFULLY,
      data: ticket
    }
  } catch (error) {
    console.error('Error fetching ticket:', error)
    throw new Error('Failed to fetch ticket')
  }
}
