import styles from './ZoneNew.module.css'
import { UserAddOutlined } from '@ant-design/icons';
import { useDispatch, } from 'react-redux'
import { Tooltip, Button } from 'antd'
import * as t from '../../public/locales/en/common'

const ZoneNew = () => {
  const dispatch = useDispatch()
  const newAction = () => dispatch({ type: 'ZONE/NEW', })
  return (
    <div 
      className={styles.container}
      onClick={newAction}
    >
      <div className={styles.iconContainer}>
        <Tooltip placement="bottom" title={t["new"]} color="#fff">
          <Button
            size="large"
            className="button success"
            shape="circle"
            icon={<UserAddOutlined/>} ghost/>
        </Tooltip>
      </div>
    </div>
  )
}

export default ZoneNew