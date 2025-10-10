import React, { lazy, Suspense, useState } from 'react'
import ModalPopUp from '../components/Modal';
const TargetImage = lazy(() => import('../components/TargetImage'));

const ShowTarget = () => {
  const [isAboutToEnd,setIsAboutToEnd] = useState(false);
  return (
    <Suspense fallback={<><p>Loading....</p></>}>
      <ModalPopUp open={isAboutToEnd} setAboutEnd={setIsAboutToEnd}/>
      <TargetImage setAboutEnd={setIsAboutToEnd}/>
    </Suspense>
  )
}

export default ShowTarget