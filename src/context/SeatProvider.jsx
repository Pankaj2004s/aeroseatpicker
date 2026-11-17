import { useMemo, useReducer } from "react";
import { SeatContext } from "./SeatContext.js";
import { ACTIONS, initialState, seatReducer } from "./seatReducer.js";
import { useSeatRows } from "../hooks/useSeatRows.js";

export function SeatProvider({ children }) {
  const [state, dispatch] = useReducer(seatReducer, initialState);
  const { status, rows: seatRows, error, retry } = useSeatRows(state.layoutId);

  const seatsById = useMemo(
    () =>
      Object.fromEntries(
        seatRows
          .flatMap((row) => row.groups.flat())
          .map((seat) => [seat.id, seat]),
      ),
    [seatRows],
  );

  const actions = useMemo(
    () => ({
      changeLayout: (layoutId) =>
        dispatch({ type: ACTIONS.SET_LAYOUT, layoutId }),
      changePassengerCount: (count) =>
        dispatch({ type: ACTIONS.SET_PASSENGER_COUNT, count }),
      selectPassenger: (passengerId) =>
        dispatch({ type: ACTIONS.SET_ACTIVE_PASSENGER, passengerId }),
      assignSeat: (passengerId, seatId) =>
        dispatch({ type: ACTIONS.ASSIGN_SEAT, passengerId, seatId }),
      removeSeat: (passengerId) =>
        dispatch({ type: ACTIONS.REMOVE_SEAT, passengerId }),
      selectMeal: (passengerId, mealId) =>
        dispatch({ type: ACTIONS.SET_MEAL, passengerId, mealId }),
      removeMeal: (passengerId) =>
        dispatch({ type: ACTIONS.REMOVE_MEAL, passengerId }),
    }),
    [],
  );

  const value = useMemo(
    () => ({
      ...state,
      seatRows,
      seatsById,
      loadStatus: status,
      loadError: error,
      retryLoad: retry,
      ...actions,
    }),
    [state, seatRows, seatsById, status, error, retry, actions],
  );

  return <SeatContext.Provider value={value}>{children}</SeatContext.Provider>;
}
