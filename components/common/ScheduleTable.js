import styles from './ScheduleTable.module.scss'
import Schedule from './Schedule'
import {buildRotatedSchedule, relativeOffset} from '../../lib/scheduleEngine'
import { useSelector } from 'react-redux'
import ShareLink from './ShareLink'

const selectScheduleableZones = (zones) => {
  return zones.filter((zone) => scheduleableZone(zone))
}

const scheduleableZone = (zone) => {
  return (zone.locationName && zone.locationName.length > 0 && zone.utcOffset)
}

const calculateSchedules = (zones) => {
  /**
   * - Locals is each location's schedule
   * - Global contains the overlap of the locations
   */
  if (zones.length < 2) {
    return {locals: [], global: []}
  }

  const baseUtc = zones[0].utcOffset
  const locals = zones.map((zone, zoneIndex) => {
    const offset = relativeOffset(baseUtc, zone.utcOffset)
    let shiftOffset = offset

    const local = buildRotatedSchedule(zone.startTime, zone.endTime, shiftOffset)
    return { local, offset, zoneIndex }
  })

  let global = new Array(24).fill(0)
  let i;
  for(i = 0; i < global.length; i++) {
    let match = 1;
    let j
    for(j = 0; j < locals.length; j++) {
      if (locals[j].local[i] === 0) {
        match = 0
      }
    }

    global[i] = match
  }

  return {locals, global}
}

const ScheduleTable = () => {
  const zones = useSelector((state) => state.zones)
  const timeFormat = useSelector((state) => state.timeFormat)
  const scheduleableZones = selectScheduleableZones(zones)
  const { locals, global } = calculateSchedules(scheduleableZones)
  const schedules = locals.map(({local, offset}, i) => {
    return <Schedule 
      key={i}
      title={zones[i].locationName}
      local={local}
      global={global}
      offset={offset}
      timeFormat={timeFormat}
    />
  })

  const shareLink = scheduleableZones.length >= 2 && <ShareLink />

  return (
    <div className={styles.container}>
      {schedules}
      {shareLink}
    </div>
  );
}

export default ScheduleTable