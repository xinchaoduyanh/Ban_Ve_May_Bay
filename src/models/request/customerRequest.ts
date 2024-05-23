import { Customer } from '../customer'

export type CustomerRequest = {
  Body: Customer
}
export type CreateCustomerRequest = CustomerRequest
export type UpdateCustomerRequest = {
  Params: {
    id: string
  }
  Body: Customer
}
export type DeleteOrGetByIdCustomerRequest = {
  Params: {
    id: string
  }
}
