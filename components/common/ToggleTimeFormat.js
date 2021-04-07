import styles from './ToggleTimeFormat.module.scss'
import { ClockCircleOutlined } from '@ant-design/icons'
import { Tooltip, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'next-i18next'

const ToggleTimeFormat = ({id}) => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const toggleAction = (id) => dispatch({ type: 'TIME/TOGGLE' })
  const format = useSelector((state) => state.timeFormat)
  return (
    <div 
      className={styles.container}
      onClick={() => toggleAction(id)}
    >
      <Tooltip placement="bottom" title={"12/24hr"} color="#fff">
        <Button className='button' icon={<ClockCircleOutlined/>} >
          {t(`time_format_toggle_${format}`)}
        </Button>
      </Tooltip>
    </div>
  )
}

export default ToggleTimeFormat