import { PrismaClient } from '@prisma/client'
import { CUSTOMER_MESSAGES } from '../constants/messages'

const prisma = new PrismaClient()

export const createCustomer = async (customerData) => {
  try {
    const customer = await prisma.customer.create({
      data: customerData
    })
    return {
      message: CUSTOMER_MESSAGES.CUSTOMER_CREATED_SUCCESSFULLY,
      data: customer
    }
  } catch (error) {
    console.error('Error creating customer:', error)
    throw new Error('Failed to create customer')
  }
}

export const updateCustomer = async (customerId, customerData) => {
  try {
    const updatedCustomer = await prisma.customer.update({
      where: { id: customerId },
      data: customerData
    })
    return {
      message: CUSTOMER_MESSAGES.CUSTOMER_UPDATED_SUCCESSFULLY,
      data: updatedCustomer
    }
  } catch (error) {
    console.error('Error updating customer:', error)
    throw new Error('Failed to update customer')
  }
}

export const deleteCustomer = async (customerId) => {
  try {
    await prisma.customer.delete({
      where: { id: customerId }
    })
    return {
      message: CUSTOMER_MESSAGES.CUSTOMER_DELETED_SUCCESSFULLY
    }
  } catch (error) {
    console.error('Error deleting customer:', error)
    throw new Error('Failed to delete customer')
  }
}

export const getCustomerById = async (customerId) => {
  try {
    const customer = await prisma.customer.findUnique({
      where: { id: customerId }
    })
    if (!customer) {
      throw new Error('Customer not found')
    }
    return {
      message: CUSTOMER_MESSAGES.CUSTOMER_FETCHED_SUCCESSFULLY,
      data: customer
    }
  } catch (error) {
    console.error('Error fetching customer:', error)
    throw new Error('Failed to fetch customer')
  }
}
