import { DEFAULT_LAYOUT_ID } from '../data/layouts.js'
import { MEALS_BY_ID } from '../data/meals.js'

export const MAX_PASSENGERS = 6

export const ACTIONS = {
  SET_LAYOUT: 'SET_LAYOUT',
  SET_PASSENGER_COUNT: 'SET_PASSENGER_COUNT',
  SET_ACTIVE_PASSENGER: 'SET_ACTIVE_PASSENGER',
  ASSIGN_SEAT: 'ASSIGN_SEAT',
  REMOVE_SEAT: 'REMOVE_SEAT',
  SET_MEAL: 'SET_MEAL',
  REMOVE_MEAL: 'REMOVE_MEAL',
}

function createPassengers(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: `p${index + 1}`,
    name: `Passenger ${index + 1}`,
  }))
}

function keepPassengers(valuesByPassenger, passengerIds) {
  return Object.fromEntries(
    Object.entries(valuesByPassenger).filter(([passengerId]) =>
      passengerIds.includes(passengerId),
    ),
  )
}

function withoutPassenger(valuesByPassenger, passengerId) {
  const copy = { ...valuesByPassenger }
  delete copy[passengerId]
  return copy
}

export const initialState = {
  layoutId: DEFAULT_LAYOUT_ID,
  passengers: createPassengers(1),
  activePassengerId: 'p1',
  assignments: {},
  meals: {},
}

export function seatReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_LAYOUT:
      if (action.layoutId === state.layoutId) return state
      return { ...state, layoutId: action.layoutId, assignments: {} }

    case ACTIONS.SET_PASSENGER_COUNT: {
      const count = Math.min(Math.max(action.count, 1), MAX_PASSENGERS)
      const passengers = createPassengers(count)
      const passengerIds = passengers.map((passenger) => passenger.id)

      const activePassengerId = passengerIds.includes(state.activePassengerId)
        ? state.activePassengerId
        : passengerIds[0]

      return {
        ...state,
        passengers,
        activePassengerId,
        assignments: keepPassengers(state.assignments, passengerIds),
        meals: keepPassengers(state.meals, passengerIds),
      }
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

    case ACTIONS.REMOVE_SEAT:
      return { ...state, assignments: withoutPassenger(state.assignments, action.passengerId) }

    case ACTIONS.SET_MEAL: {
      const { passengerId, mealId } = action

      const isKnownPassenger = state.passengers.some((passenger) => passenger.id === passengerId)
      if (!isKnownPassenger || !MEALS_BY_ID[mealId]) return state

      return { ...state, meals: { ...state.meals, [passengerId]: mealId } }
    }

    case ACTIONS.REMOVE_MEAL:
      return { ...state, meals: withoutPassenger(state.meals, action.passengerId) }

    default:
      return state
  }
}
