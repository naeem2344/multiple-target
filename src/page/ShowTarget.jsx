import React, { lazy, Suspense, useEffect, useState } from 'react'
import ModalPopUp from '../components/RegistraionPopUp';
import DiscountPopUp from '../components/DiscountPopUp';
const TargetImage = lazy(() => import('../components/TargetImage'));

const ShowTarget = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [couponModal, setCouponModal] = useState(false);
  const [targetDetected, setTargetDetacted] = useState(false);
  const modalKey = localStorage.getItem('modal-key');
  const discountKey = localStorage.getItem('discount-key');

  useEffect(() => {

    // Initially for show login modal
    if (targetDetected && (modalKey === 'countinue' || !modalKey)) {
      // Show the login modal after 5sec and update the localStorage to countinue
      setTimeout(() => {
        setLoginModal(true)
        localStorage.setItem('modal-key', 'countinue');
      }, 500)
    }

    // Show the modal of generate token and copy/save the token after 8 sec
    if (targetDetected && modalKey === 'done' && (discountKey === 'countinue' || !discountKey)) {
      // Show Show the discount modal after 8sec and update the localStorage to countinue
      setTimeout(() => {
        setCouponModal(true);
        localStorage.setItem('discount-key', 'countinue');
      }, 800);
    }
  }, [targetDetected]);


  return (
    <Suspense fallback={<><p>Loading....</p></>}>
      <ModalPopUp open={loginModal} setLoginModal={setLoginModal} />
      <DiscountPopUp couponModal={couponModal} setCouponModal={setCouponModal} />
      <TargetImage setTargetDetacted={setTargetDetacted} />
    </Suspense>
  )
}

export default ShowTarget