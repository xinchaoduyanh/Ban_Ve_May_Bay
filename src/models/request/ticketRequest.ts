import { Ticket } from '../ticket.model'

export type CreateTicketRequest = {
  Body: Ticket
}
export type UpdateTicketRequest = {
  Body: Ticket
  Params: {
    id: string
  }
}
export type DeleteOrGetByIdTicketRequest = {
  Params: {
    id: string
  }
}
