import { lazy, Suspense } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useParams,
} from 'react-router-dom'

import Home from '../README.md'

import './global.css'
import 'github-markdown-css'

const Package = () => {
  const { name } = useParams<{ name: string }>()
  const Pkg = lazy(() => import(`../packages/${name!}/README.md`))
  return (
    <Suspense>
      <Pkg />
    </Suspense>
  )
}

const Changelog = () => {
  const { name } = useParams<{ name: string }>()
  const Changelog = lazy(() =>
    name
      ? import(`../packages/${name}/CHANGELOG.md`)
      : import('../CHANGELOG.md'),
  )
  return (
    <Suspense fallback={null}>
      <Changelog />
    </Suspense>
  )
}

export const App = () => (
  <Router>
    <Routes>
      <Route
        path="/CHANGELOG.md"
        element={<Changelog />}
      />
      <Route
        path="/packages/:name"
        element={<Package />}
      />
      <Route
        path="/packages/:name/CHANGELOG.md"
        element={<Changelog />}
      />
      <Route
        path="/"
        element={<Home />}
      />
    </Routes>
  </Router>
)
