import Header from './components/Header.jsx'
import LayoutToggle from './components/LayoutToggle.jsx'
import MobileTotalBar from './components/MobileTotalBar.jsx'
import PassengerPanel from './components/PassengerPanel.jsx'
import PriceSummary from './components/PriceSummary.jsx'
import SeatLegend from './components/SeatLegend.jsx'
import SeatMap from './components/SeatMap.jsx'
import Toast from './components/Toast.jsx'
import { useToast } from './hooks/useToast.js'

function App() {
  const { toast, showToast } = useToast()

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-6 lg:pb-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Select your seats</h1>
            <p className="text-sm text-slate-500">Changing the layout clears selected seats.</p>
          </div>
          <LayoutToggle />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div className="flex flex-col gap-6">
            <SeatLegend />
            <SeatMap onNotify={showToast} />
          </div>

          <div className="contents lg:sticky lg:top-4 lg:flex lg:flex-col lg:gap-4">
            <div className="order-first lg:order-none">
              <PassengerPanel />
            </div>
            <div className="order-last lg:order-none">
              <PriceSummary />
            </div>
          </div>
        </div>
      </main>
      <MobileTotalBar />
      <Toast toast={toast} />
    </div>
  )
}

export default App
