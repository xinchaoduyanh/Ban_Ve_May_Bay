import { Seat } from '../seat.model'

export type CreateSeatRequest = {
  Body: Seat
}
export type UpdateSeatRequest = {
  Body: Seat
  Params: {
    id: string
  }
}
export type DeleteOrGetByIdSeatRequest = {
  Params: {
    id: string
  }
}
