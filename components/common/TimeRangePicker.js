import styles from './TimeRangePicker.module.scss'
import { Slider} from 'antd'
import { hourDisplayI18n } from '../../lib/timeHelpers'
import * as t from '../../public/locales/en/common'

const MARKS = [0, 12, 24, 36]

const getMarks = (marks, timeFormat) => {
  const m = {}
  marks.forEach(value => {
    m[value] = t.default[`${timeFormat}_${value}`]
  });
  return m;
}

const handler = ([startTime, endTime], updateHandler) => {
  if ((endTime - startTime) > 24) {
    return
  }
  updateHandler({startTime, endTime})
}

export default function TimeRangePicker({id, startTime, endTime, timeFormat, updateHandler}) {
  const marks = getMarks(MARKS, timeFormat)
  return (
    <div key={id}>
      <Slider
        className={"slider"}
        range={{ draggableTrack: true }}
        tipFormatter={(v) => hourDisplayI18n(v, timeFormat, )}
        min={Math.min(...MARKS)}
        max={Math.max(...MARKS)}
        marks={marks}
        value={[startTime, endTime]}
        onChange={(e) => handler(e, updateHandler)}
        tooltipVisible={false}
      />
      <div className={styles.times}>
        {hourDisplayI18n(startTime, timeFormat)}&nbsp;-&nbsp;{hourDisplayI18n(endTime, timeFormat)}
      </div>
    </div>
  )
}
