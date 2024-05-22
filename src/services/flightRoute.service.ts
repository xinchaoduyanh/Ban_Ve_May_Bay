import { PrismaClient } from '@prisma/client'
import { FLIGHT_ROUTE_MESSAGES } from '../constants/messages'
import { FlightRoute } from '~/models/flightRoute.model'

const prisma = new PrismaClient()

export const createFlightRoute = async (flightRouteData: FlightRoute) => {
  try {
    const flightRoute = await prisma.flightRoute.create({
      data: flightRouteData
    })
    return {
      message: FLIGHT_ROUTE_MESSAGES.FLIGHT_ROUTE_CREATED_SUCCESSFULLY,
      data: flightRoute
    }
  } catch (error) {
    console.error('Error creating flight route:', error)
    throw new Error('Failed to create flight route')
  }
}

export const updateFlightRoute = async (flightRouteId: string, flightRouteData: FlightRoute) => {
  try {
    const updatedFlightRoute = await prisma.flightRoute.update({
      where: { id: flightRouteId },
      data: flightRouteData
    })
    return {
      message: FLIGHT_ROUTE_MESSAGES.FLIGHT_ROUTE_UPDATED_SUCCESSFULLY,
      data: updatedFlightRoute
    }
  } catch (error) {
    console.error('Error updating flight route:', error)
    throw new Error('Failed to update flight route')
  }
}

export const deleteFlightRoute = async (flightRouteId: string) => {
  try {
    await prisma.flightRoute.delete({
      where: { id: flightRouteId }
    })
    return {
      message: FLIGHT_ROUTE_MESSAGES.FLIGHT_ROUTE_DELETED_SUCCESSFULLY
    }
  } catch (error) {
    console.error('Error deleting flight route:', error)
    throw new Error('Failed to delete flight route')
  }
}

export const getFlightRouteById = async (flightRouteId: string) => {
  try {
    const flightRoute = await prisma.flightRoute.findUnique({
      where: { id: flightRouteId }
    })
    if (!flightRoute) {
      throw new Error('Flight route not found')
    }
    return {
      message: FLIGHT_ROUTE_MESSAGES.FLIGHT_ROUTE_FETCHED_SUCCESSFULLY,
      data: flightRoute
    }
  } catch (error) {
    console.error('Error fetching flight route:', error)
    throw new Error('Failed to fetch flight route')
  }
}
