import { useEffect } from 'react'

export const Finance = () => {

  useEffect(() => {
    if (Telegram?.WebApp) {
      Telegram.WebApp.BackButton.show()
    }

  }, [Telegram])

  return (
    <div>
      sxxssxx
    </div>
  )
}
