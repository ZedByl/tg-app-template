import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { configure } from '@gravity-ui/uikit'
import App from 'app'

// TODO разобраться с локалями
configure({
  lang: 'ru',
})

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
