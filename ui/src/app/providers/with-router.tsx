import { JSX, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Spin } from '@gravity-ui/uikit'

// eslint-disable-next-line react/display-name
export const withRouter = (component: () => React.ReactNode) => (): JSX.Element => (
  <BrowserRouter>
    <Suspense
      fallback={
      <Spin
        className="overlay"
        size="xl"
      />
    }
    >
      {component()}
    </Suspense>
  </BrowserRouter>
)
