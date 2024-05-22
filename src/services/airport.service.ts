import { PrismaClient } from '@prisma/client'
import { Airport as AirportModel } from '../models/airport.model'
import { AIRPORT_MESSAGES } from '../constants/messages'

const prisma = new PrismaClient()

export const createAirport = async (airport: AirportModel) => {
  const airportCreated = await prisma.airport.create({
    data: airport
  })
  return {
    message: AIRPORT_MESSAGES.AIRPORT_CREATED_SUCCESSFULLY,
    data: airportCreated
  }
}

export const getAirport = async (id: string) => {
  const airport = await prisma.airport.findUnique({
    where: { id }
  })
  if (!airport) {
    return { message: AIRPORT_MESSAGES.AIRPORT_NOT_FOUND }
  }
  return {
    message: AIRPORT_MESSAGES.AIRPORT_FETCHED_SUCCESSFULLY,
    data: airport
  }
}

export const updateAirport = async (id: string, airport: AirportModel) => {
  const airportUpdated = await prisma.airport.update({
    where: { id },
    data: airport
  })
  return {
    message: AIRPORT_MESSAGES.AIRPORT_UPDATED_SUCCESSFULLY,
    data: airportUpdated
  }
}

export const deleteAirport = async (id: string) => {
  await prisma.airport.delete({
    where: { id }
  })
  return {
    message: AIRPORT_MESSAGES.AIRPORT_DELETED_SUCCESSFULLY
  }
}
