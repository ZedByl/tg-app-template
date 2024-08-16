import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@gravity-ui/uikit'
import { withProviders } from 'app/providers'

import { Layout } from 'shared/ui/Layout'
import { HomePage } from 'pages/Home'
import { Finance } from 'pages/Finance'

import './index.scss'

const App = () => {
  const theme = Telegram.WebApp.colorScheme

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/finance/:nick"
            element={<Finance />}
          />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default withProviders(App)
