import styles from './ShareLink.module.scss'
import { 
  LinkOutlined,
  CopyOutlined,
  ShareAltOutlined,
  CheckCircleOutlined
} from '@ant-design/icons'
import { Button, Input, Tooltip } from 'antd'
import {encodeURLParam} from "../../lib/urlHelpers"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shorten } from '../../lib/bitly'
import * as t from '../../public/locales/en/common'

const share = (state, handler) => {
  const link = encodeURLParam(window.location.href, "s", state)
  handler(link)
}

const copy = (id, setCopied) => {
  let copyText = document.getElementById(id)
  copyText.select()
  document.execCommand("copy")
  setCopied(true)
}

const shortenUrlCallback = () => {
  const dispatch = useDispatch()
  return async (urlLong) => {
    const resp = await shorten(urlLong)
    const url = resp.link
    dispatch({
      type: 'URL/SHORTEN',
      payload: {url}
    })
  }
}

const ShareLink = ({state, short}) => {
  const [copied, setCopied] = useState(false)
  const [share, setSharable] = useState(false)

  const id = "shareInput"
  const url = useSelector((state) => state.url)
  const shortenUrl = shortenUrlCallback();

  let copyIcon
  if (copied) {
    copyIcon = <CheckCircleOutlined style={{ color: "#91f788" }}/>
  } else {
    copyIcon = <CopyOutlined className={styles.iconWhite } />
  }

  let object
  if (share && url && url.length > 0) {
    object = 
        <div className={styles.shareContainer}>
          <Input 
            id={id}
            placeholder="Borderless"
            className={styles.input}
            bordered={false}
            value={url}
            suffix={
              <div onClick={() => { copy(id, setCopied)}}>
                <Tooltip title={t["copy"]} color="#fff">
                  {copyIcon}
                </Tooltip>
              </div>
            }
          />
          <Button 
            onClick={() => copy(id, setCopied)}
            className={styles.button}
            icon={copyIcon} ghost>
            { t["copy"] }
          </Button>
          <Button
            onClick={() => {shortenUrl(url)}}
            className={styles.button}
            icon={<LinkOutlined/>} ghost>
            { t["shorten"] }
          </Button>
        </div>
  } else {
    object = 
        <Button
          onClick={() => {setSharable(true)}}
          className='button'
          icon={<ShareAltOutlined/>} ghost>
          { t["share"] }
        </Button>
  }

  return (
    <div 
      className={styles.container}
      onClick={() => { return true}}
    >
      {object}
    </div>
  )
}

export default ShareLink