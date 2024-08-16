import { useEffect } from 'react'
import { Spinner } from '@telegram-apps/telegram-ui';


export const HomePage = () => {
  useEffect(() => {
    if (Telegram?.WebApp) {
      Telegram.WebApp.BackButton.hide()
    }

  }, [Telegram])
  return (
    <div>
      <Spinner
        size='l'
      />
    </div>
  )
}
