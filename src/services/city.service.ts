// services/city.service.ts

import { PrismaClient } from '@prisma/client'
import { CITY_MESSAGES } from '../constants/messages'
import { City } from '~/models/city.model'

const prisma = new PrismaClient()

export const createCity = async (cityData: City): Promise<{ message: string; data?: City }> => {
  try {
    const city = await prisma.city.create({
      data: cityData
    })
    return {
      message: CITY_MESSAGES.CITY_CREATED_SUCCESSFULLY,
      data: city
    }
  } catch (error) {
    console.error('Error creating city:', error)
    throw new Error('Failed to create city')
  }
}

export const updateCity = async (cityId: string, cityData: City): Promise<{ message: string; data?: City }> => {
  try {
    const updatedCity = await prisma.city.update({
      where: { id: cityId },
      data: cityData
    })
    return {
      message: CITY_MESSAGES.CITY_UPDATED_SUCCESSFULLY,
      data: updatedCity
    }
  } catch (error) {
    console.error('Error updating city:', error)
    throw new Error('Failed to update city')
  }
}

export const deleteCity = async (cityId: string): Promise<{ message: string }> => {
  try {
    await prisma.city.delete({
      where: { id: cityId }
    })
    return {
      message: CITY_MESSAGES.CITY_DELETED_SUCCESSFULLY
    }
  } catch (error) {
    console.error('Error deleting city:', error)
    throw new Error('Failed to delete city')
  }
}

export const getCityById = async (cityId: string): Promise<{ message: string; data?: City }> => {
  try {
    const city = await prisma.city.findUnique({
      where: { id: cityId }
    })
    if (!city) {
      throw new Error(CITY_MESSAGES.CITY_NOT_FOUND)
    }
    return {
      message: CITY_MESSAGES.CITY_FETCHED_SUCCESSFULLY,
      data: city
    }
  } catch (error) {
    console.error('Error fetching city:', error)
    throw new Error('Failed to fetch city')
  }
}
