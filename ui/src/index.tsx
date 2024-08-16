import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { TelegramProvider } from 'app/providers';
import App from 'app'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <BrowserRouter>
      <TelegramProvider>
        <App />
      </TelegramProvider>
    </BrowserRouter>
  </StrictMode>,
)
