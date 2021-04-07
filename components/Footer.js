import styles from './Footer.module.css'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useState, useEffect } from 'react'

export default function Footer({title, twitter}) {
  const { t } = useTranslation('footer')
  const [search, setSearch] = useState("")
  
  useEffect(function mount() {
    setSearch(window.location.search)
  })

  return (
    <>
      <footer className={styles.footer}>
        <ul className={styles.list}>
          <li className={styles.header}>{title}</li> 
          <li><Link href="/about"><a>{t("about")}</a></Link> </li> 
          <li><a href="https://slack.whentochat.co/">Slack</a></li> 
        </ul>
        <ul className={styles.list}>
          <li className={styles.header}>{t("contact")}</li> 
          <li><a href={`https://twitter.com/${twitter}`}>{`@${twitter}`}</a></li> 
        </ul>
        <ul className={styles.list}>
          <li className={styles.header}>{t("language")}</li> 
          <li>
            <Link href={`/${search}`} locale="en">
              <a>English</a>
            </Link>
          </li>
          <li>
            <Link href={`/${search}`} locale="ja">
              <a>日本語</a>
            </Link>
          </li>
        </ul>
        <ul className={styles.list}>
          <li>Copyright © {new Date().getFullYear()}</li> 
        </ul>
      </footer>
    </>
  )
}
