import { FLIGHT } from "../data/flight.js";

function Header() {
  const { number, from, to, date, departure, arrival, duration } = FLIGHT;

  return (
    <header className="bg-blue-700 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <div>
          <p className="text-lg font-bold tracking-tight">AeroSeatPicker</p>
          <p className="text-xs text-blue-200">Choose your seats</p>
        </div>
        <div className="sm:text-right">
          <p className="font-semibold">
            {from.city} ({from.code}) → {to.city} ({to.code})
          </p>
          <p className="text-xs text-blue-200">
            {number} · {date} · {departure} - {arrival} · {duration}
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
