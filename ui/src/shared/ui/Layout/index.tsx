import { FC } from 'react'
import { Children } from 'app/types'
import styles from './index.module.scss'


export const Layout: FC<Children> = ({ children }) => {

  return (
    <main className={styles.layoutContainer}>
      {children}
    </main>
  )
}
