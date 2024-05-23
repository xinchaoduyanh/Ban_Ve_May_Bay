import { Airport } from '../airport.model'

export type UpdateAirportRequest = {
  Body: Airport
  Params: {
    id: string
  }
}

export type CreateAirportRequest = {
  Body: Airport
}
