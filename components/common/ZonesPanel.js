import styles from './ZonesPanel.module.css'
import Zone from './Zone'
import ZoneNew from './ZoneNew'
import { useSelector } from 'react-redux'

const ZonesPanel = () => {
  const zones = useSelector((state) => state.zones)
  const zoneItems = zones.map((_number, id) => <Zone key={id} id={id} /> );

  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        {zoneItems}
      </div>
      <ZoneNew />
    </div>
  )
}

export default ZonesPanel