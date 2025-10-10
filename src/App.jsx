import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const Home = lazy(() => import('./page/Home'));
const Landing = lazy(() => import('./page/Landing'));
const ShowTarget = lazy(() => import('./page/ShowTarget'));

const App = () => {
  return (
    <Suspense fallback={<p>Loading....</p>}>
      <Routes>
        <Route index element={<><Home /></>} />
        <Route path='/landing' element={<><Landing /></>} />
        <Route path="/show-content/:id" element={<ShowTarget />} />
      </Routes>
    </Suspense>
  )
}

export default App;