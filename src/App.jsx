import Header from './components/Header.jsx'
import LayoutToggle from './components/LayoutToggle.jsx'
import SeatLegend from './components/SeatLegend.jsx'
import SeatMap from './components/SeatMap.jsx'

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <main className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Select your seats</h1>
            <p className="text-sm text-slate-500">Changing the layout clears selected seats.</p>
          </div>
          <LayoutToggle />
        </div>
        <SeatLegend />
        <SeatMap />
      </main>
    </div>
  )
}

export default App
