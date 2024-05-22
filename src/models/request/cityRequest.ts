import { City } from '../city.model'

export type UpdateCityRequest = {
  Body: City
  Params: {
    id: string
  }
}
