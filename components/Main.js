import ZonesPanel from './common/ZonesPanel'
import ToggleTimeFormat from './common/ToggleTimeFormat'
import ScheduleTable from './common/ScheduleTable'

export default function Main() {
  return (
    <main>
      <div style={{
        padding: 10,
        margin: 10,
        color: 'white',
        backgroundColor: '#FF6961',
        textAlign: 'center',
      }}>
        Sorry, this site costs too much to run b/c of GoogleMaps API limits. I'm shutting it down for now.
      </div>
      <div>
        <ZonesPanel />
        <ToggleTimeFormat />
        <ScheduleTable />
      </div>
    </main>
  )
}