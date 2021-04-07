import styles from './Header.module.css'
import Link from 'next/link'

export default function Header({ title, subtitle }) {
  return (
    <header className={styles.container} >
      <Link href="/">
        <a>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
        </a>
      </Link>
    </header>
  )
}
