import { Wallet } from '@widgets/Wallet'
import { useEffect } from 'react'


export const HomePage = () => {

  useEffect(() => {
    if (Telegram?.WebApp) {
      Telegram.WebApp.BackButton.hide()
    }

  }, [Telegram])
  return (
    <div>
      <Wallet />
    </div>
  )
}
