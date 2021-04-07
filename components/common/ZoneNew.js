import styles from './ZoneNew.module.css'
import { UserAddOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { Tooltip, Button } from 'antd';
import { useTranslation } from 'next-i18next'

const ZoneNew = () => {
  const dispatch = useDispatch()
  const newAction = () => dispatch({ type: 'ZONE/NEW', })
  const { t } = useTranslation('common')
  return (
    <div 
      className={styles.container}
      onClick={newAction}
    >
      <div className={styles.iconContainer}>
        <Tooltip placement="bottom" title={t("new")} color="#fff">
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