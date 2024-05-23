import { FlightRoute } from '../flightRoute.model'

export type UpdateFlightRouteRequest = {
  Body: FlightRoute
  Params: {
    id: string
  }
}

export type CreateFlightRouteRequest = {
  Body: FlightRoute
}
export type DeleteOrGetyByIdFlightRouteRequest = {
  Params: {
    id: string
  }
}
