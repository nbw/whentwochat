import styles from './Header.module.css'
import Link from 'next/link'
import * as t from '../public/locales/en/common'

export default function Header() {
  return (
    <header className={styles.container} >
      <Link href="/">
        <a>
          <h1 className={styles.title}>{t["title"]}</h1>
          <h2 className={styles.subtitle}>{t["subtitle"]}</h2>
        </a>
      </Link>
    </header>
  )
}
