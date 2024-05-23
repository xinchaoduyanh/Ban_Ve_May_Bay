import { TicketClass } from '../ticketClass.model'

export type TicketClassRequest = {
  Body: TicketClass
}
export type updateTicketClassRequest = {
  Body: TicketClass
  Params: {
    id: string
  }
}

export type DeleteTicketClassRequest = {
  Params: {
    id: string
  }
}
