import React, { lazy, Suspense } from 'react'
const TargetLessVideo = lazy(() => import('../components/TargetLessVideo'));
import '../style.css'
const SingleVideo = () => {
    return (
        <Suspense fallback={<><p>Please wait...</p></>}>
            <div className='single__video__container'>
                <TargetLessVideo />
            </div>
        </Suspense>
    )
}

export default SingleVideo