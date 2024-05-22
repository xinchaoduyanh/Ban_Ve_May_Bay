import { Flight } from '../flight.model'

export type CreateFlightRequest = {
  Body: Flight
}

export type UpdateFlightRequest = {
  Params: { id: string }
  Body: Flight
}

export type DeleteOrGetByIdFlightRequest = {
  Params: { id: string }
}
