import { DEFAULT_LAYOUT_ID } from '../data/layouts.js'

export const MAX_PASSENGERS = 6

export const ACTIONS = {
  SET_LAYOUT: 'SET_LAYOUT',
  SET_PASSENGER_COUNT: 'SET_PASSENGER_COUNT',
  SET_ACTIVE_PASSENGER: 'SET_ACTIVE_PASSENGER',
  ASSIGN_SEAT: 'ASSIGN_SEAT',
  REMOVE_SEAT: 'REMOVE_SEAT',
}

function createPassengers(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: `p${index + 1}`,
    name: `Passenger ${index + 1}`,
  }))
}

export const initialState = {
  layoutId: DEFAULT_LAYOUT_ID,
  passengers: createPassengers(1),
  activePassengerId: 'p1',
  assignments: {},
}

export function seatReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_LAYOUT:
      return { ...state, layoutId: action.layoutId, assignments: {} }

    case ACTIONS.SET_PASSENGER_COUNT: {
      const count = Math.min(Math.max(action.count, 1), MAX_PASSENGERS)
      const passengers = createPassengers(count)
      const passengerIds = passengers.map((passenger) => passenger.id)

      const assignments = Object.fromEntries(
        Object.entries(state.assignments).filter(([passengerId]) =>
          passengerIds.includes(passengerId),
        ),
      )

      const activePassengerId = passengerIds.includes(state.activePassengerId)
        ? state.activePassengerId
        : passengerIds[0]

      return { ...state, passengers, assignments, activePassengerId }
    }

    case ACTIONS.SET_ACTIVE_PASSENGER:
      return { ...state, activePassengerId: action.passengerId }

    case ACTIONS.ASSIGN_SEAT: {
      const { passengerId, seatId } = action

      const isTakenByAnother = Object.entries(state.assignments).some(
        ([id, assignedSeatId]) => assignedSeatId === seatId && id !== passengerId,
      )
      if (isTakenByAnother) return state

      return {
        ...state,
        assignments: { ...state.assignments, [passengerId]: seatId },
      }
    }

     case ACTIONS.SET_LAYOUT:
      if (action.layoutId === state.layoutId) return state
      return { ...state, layoutId: action.layoutId, assignments: {} }

    default:
      return state
  }
}
