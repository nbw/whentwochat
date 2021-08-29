import ZonesPanel from './common/ZonesPanel'
import ToggleTimeFormat from './common/ToggleTimeFormat'
import ScheduleTable from './common/ScheduleTable'

export default function Main() {
  return (
    <main>
      <div>
        <ZonesPanel />
        <ToggleTimeFormat />
        <ScheduleTable />
      </div>
    </main>
  )
}