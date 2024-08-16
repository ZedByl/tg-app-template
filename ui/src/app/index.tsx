import { Route, Routes } from 'react-router-dom'

import { Layout } from 'shared/ui/Layout'
import { HomePage } from 'pages/Home'

import './index.scss'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
      </Routes>
    </Layout>
  )
}

export default App
