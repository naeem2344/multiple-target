import React, { lazy, Suspense } from 'react'
import '../style.css'

const TargetLessVideo = lazy(() => import('../components/TargetLessVideo'))

const SingleVideo = () => {
    return (
        <Suspense fallback={<p className="loading__text">Please wait...</p>}>
            <div className='single__video__container'>
                <TargetLessVideo />
            </div>
        </Suspense>
    )
}

export default SingleVideo