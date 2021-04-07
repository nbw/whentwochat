import styles from './Schedule.module.scss'
import ScheduleItem from './ScheduleItem'
import { hourDisplayI18n, plusMinusDay } from '../../lib/timeHelpers'
import { useTranslation } from 'next-i18next'

const buildSchedule = (local, global, offset, timeFormat, t) => {
  return local.map((localValue, index) => {
    const globalValue = global[index]
    const text = hourDisplayI18n((index + offset), timeFormat, t)
    const subText = (timeFormat === 12) ? plusMinusDay(index + offset, t) : ""
    return (
      <ScheduleItem 
        key={index}
        text={text}
        subText={subText}
        local={localValue} 
        global={globalValue}
      />
    )
  })
}

const Schedule = ({title, local, global, offset, timeFormat}) => {
  const { t } = useTranslation('common')
  const items = buildSchedule(local, global, offset, timeFormat, t)
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div>
        {items}
      </div>
    </div>
  )
}

export default Schedule