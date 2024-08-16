import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Children } from 'app/types'
import styles from './index.module.scss'

export const Layout: FC<Children> = ({ children }) => {
  const navigate = useNavigate()
  console.log(Telegram)

  useEffect(() => {
    if (Telegram?.WebApp) {
      Telegram.WebApp.expand()
      Telegram.WebApp.BackButton.onClick(() => navigate(-1))
    }

  }, [Telegram])

  return (
    <main className={styles.layoutContainer}>
      {children}
    </main>
  )
}
