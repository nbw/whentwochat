import styles from './ScheduleItem.module.scss'

const ScheduleItem = ({text, subText, local, global}) => {
  let itemClasses = styles.item
  
  if (local) {
    itemClasses += ` ${styles.localActive}`
  }

  if (global) {
    itemClasses += ` ${styles.globalActive}`
  }

  return (
    <div className={itemClasses}>
      {text}
      <span className={styles.subText}>{subText}</span>
    </div>
  )
}

export default ScheduleItem