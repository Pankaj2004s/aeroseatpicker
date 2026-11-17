import PassengerCount from './PassengerCount.jsx'
import PassengerTabs from './PassengerTabs.jsx'

function PassengerPanel() {
  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <PassengerCount />
      <PassengerTabs />
    </section>
  )
}

export default PassengerPanel
