import { PrismaClient } from '@prisma/client'
import { FLIGHT_MESSAGES } from '../constants/messages'
import { Flight } from '~/models/flight.model'

const prisma = new PrismaClient()

export const createFlight = async (flightData: Flight) => {
  try {
    const flight = await prisma.flight.create({
      data: flightData
    })
    return {
      message: FLIGHT_MESSAGES.FLIGHT_CREATED_SUCCESSFULLY,
      data: flight
    }
  } catch (error) {
    console.error('Error creating flight:', error)
    throw new Error('Failed to create flight')
  }
}

export const updateFlight = async (flightId: string, flightData: Flight) => {
  try {
    const updatedFlight = await prisma.flight.update({
      where: { id: flightId },
      data: flightData
    })
    return {
      message: FLIGHT_MESSAGES.FLIGHT_UPDATED_SUCCESSFULLY,
      data: updatedFlight
    }
  } catch (error) {
    console.error('Error updating flight:', error)
    throw new Error('Failed to update flight')
  }
}

export const deleteFlight = async (flightId: string) => {
  try {
    await prisma.flight.delete({
      where: { id: flightId }
    })
    return {
      message: FLIGHT_MESSAGES.FLIGHT_DELETED_SUCCESSFULLY
    }
  } catch (error) {
    console.error('Error deleting flight:', error)
    throw new Error('Failed to delete flight')
  }
}

export const getFlightById = async (flightId: string) => {
  try {
    const flight = await prisma.flight.findUnique({
      where: { id: flightId }
    })
    if (!flight) {
      throw new Error('Flight not found')
    }
    return {
      message: FLIGHT_MESSAGES.FLIGHT_FETCHED_SUCCESSFULLY,
      data: flight
    }
  } catch (error) {
    console.error('Error fetching flight:', error)
    throw new Error('Failed to fetch flight')
  }
}
