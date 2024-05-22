import { FlightRoute } from '../flightRoute.model'

export type UpdateFlightRouteRequest = {
  Body: FlightRoute
  Params: {
    id: string
  }
}

export type createFlightRouteRequest = {
  Body: FlightRoute
}
export type DeleteOrGetyByIdFlightRouteRequest = {
  Params: {
    id: string
  }
}
