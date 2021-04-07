import styles from './Zone.module.css'
import LocationInput from './LocationInput'
import TimeRangePicker from './TimeRangePicker'
import ZoneDelete from './ZoneDelete'
import { useTranslation } from 'next-i18next'
import { useDispatch, useSelector } from 'react-redux'

const placeholder = (id) => {
  const { t } = useTranslation('common');
  switch(id) {
  case 0:
    return t("location_your");
  case 1:
    return t("location_their");
  default:
    return t("location_another");
  }
}

const deleteButton = (id) => {
  if(id > 1) {
    return <ZoneDelete id={id} />
  } else {
    return null
  }
}

const updateZone = () => {
  const dispatch = useDispatch()
  return (id, payload) => {
    dispatch({
      type: 'ZONE/UPDATE',
      payload: {
        id: id,
        ...payload
      }
    })
  }
}

const Zone = ({id}) => {
  const formattedAddress = useSelector((state) => state.zones[id].formattedAddress)
  const startTime = useSelector((state) => state.zones[id].startTime)
  const endTime = useSelector((state) => state.zones[id].endTime)
  const timeFormat = useSelector((state) => state.timeFormat)
  const handler = updateZone()
  return (
    <div className={styles.container}>
      <LocationInput 
        id={id}
        placeholder={placeholder(id)}
        initialValue={formattedAddress}
        updateHandler={(payload) => handler(id, payload)}
      />
      <TimeRangePicker
        id={id} 
        startTime={startTime}
        endTime={endTime}
        timeFormat={timeFormat}
        updateHandler={(payload) => handler(id, payload)}
      />
      { deleteButton(id) }
    </div>
  )
}

export default Zone