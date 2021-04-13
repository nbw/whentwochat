import styles from './ShareLink.module.scss'
import { 
  LinkOutlined,
  CopyOutlined,
  ShareAltOutlined,
  CheckCircleOutlined
} from '@ant-design/icons'
import { Button, Input, Tooltip } from 'antd'
import {encodeURLParam} from "../../lib/urlHelpers"
import { useSelector } from 'react-redux'
import { useState } from 'react'
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

const shortenUrl = async (link, setLink) => {
  setLink(await shorten(link));
}

const ShareLink = () => {
  const [link, setLink] = useState("")
  const [copied, setCopied] = useState(false)

  const id = "shareInput"
  const state = useSelector((state) => state)

  let copyIcon
  if (copied) {
    copyIcon = <CheckCircleOutlined style={{ color: "#91f788" }}/>
  } else {
    copyIcon = <CopyOutlined className={styles.iconWhite } />
  }

  let object
  if (link && link.length > 0) {
    object = 
        <div className={styles.shareContainer}>
          <Input 
            id={id}
            placeholder="Borderless"
            className={styles.input}
            bordered={false}
            value={link}
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
            onClick={() => shortenUrl(link, setLink)}
            className={styles.button}
            icon={<LinkOutlined/>} ghost>
            { t["shorten"] }
          </Button>
        </div>
  } else {
    object = 
        <Button className='button' icon={<ShareAltOutlined/>} ghost>
          { t["share"] }
        </Button>
  }

  return (
    <div 
      className={styles.container}
      onClick={() => share(state, setLink)}
    >
      {object}
    </div>
  )
}

export default ShareLink