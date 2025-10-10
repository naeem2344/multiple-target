import React, { lazy, Suspense } from 'react'
const TargetImage = lazy(() => import('../components/TargetImage'));

const ShowTarget = () => {
  return (
    <Suspense fallback={<><p>Loading....</p></>}>
      <TargetImage />
    </Suspense>
  )
}

export default ShowTarget