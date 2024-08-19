import { useEffect } from 'react'
import { Spin } from '@gravity-ui/uikit';

export const HomePage = () => {
  useEffect(() => {
    if (Telegram?.WebApp) {
      Telegram.WebApp.BackButton.hide()
    }
  }, [Telegram])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
      alignItems: 'center',
    }}>
      <Spin size="xl" />
    </div>
  )
}
