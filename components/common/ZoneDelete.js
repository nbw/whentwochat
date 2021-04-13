import styles from './ZoneDelete.module.css'
import { DeleteOutlined } from '@ant-design/icons'
import { Tooltip, Button } from 'antd'
import { useDispatch } from 'react-redux'
import * as t from '../../public/locales/en/common'

const ZoneDelete = ({id}) => {
  const dispatch = useDispatch()
  const deleteAction = (id) => dispatch({ type: 'ZONE/DELETE', payload: { id: id }})
  return (
    <div 
      className={styles.container}
      onClick={() => deleteAction(id)}
    >
      <div className={styles.iconContainer}>
        <Tooltip placement="bottom" title={t["remove"]} color="#fff">
          <Button className='button danger' shape="circle" icon={<DeleteOutlined/>} ghost/>
        </Tooltip>
      </div>
    </div>
  )
}

export default ZoneDelete