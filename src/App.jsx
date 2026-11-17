import SeatMap from './components/SeatMap.jsx'

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-blue-700 px-4 py-4 text-white">
        <h1 className="mx-auto max-w-5xl text-xl font-bold">AeroSeatPicker</h1>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-6">
        <SeatMap />
      </main>
    </div>
  )
}

export default App
