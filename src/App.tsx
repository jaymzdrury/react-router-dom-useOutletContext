import {Suspense, lazy} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const Parent = lazy(() => import('./Parent'))
const Child = lazy(() => import('./Child'))
const GrandParent = lazy(() => import('./GrandParent'))

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><GrandParent /></Suspense>}>
          <Route path='/parent' element={<Suspense fallback={<div>Loading...</div>}><Parent /></Suspense>}>
            <Route path='/parent/child' element={<Suspense fallback={<div>Loading...</div>}><Child /></Suspense>} />
          </Route>
        </Route>
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;