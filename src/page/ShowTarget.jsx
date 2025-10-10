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
    let loginTime; 
    let discountTime; 
    // Initially for show login modal
    // alert(targetDetected)
    // alert(modalKey)
    // alert(loginModal)
    // alert(couponModal)
   
    if (targetDetected && (modalKey === 'countinue' || !modalKey)) {
      // Show the login modal after 5sec and update the localStorage to countinue
      loginTime = setTimeout(() => {
        setLoginModal(!loginModal)
        localStorage.setItem('modal-key', 'countinue');
      }, 500)
    }
    // Show the modal of generate token and copy/save the token after 8 sec
    if (targetDetected && modalKey === 'done' && (discountKey === 'countinue' || !discountKey)) {
      // Show Show the discount modal after 8sec and update the localStorage to countinue
      discountTime = setTimeout(() => {
        setCouponModal(!couponModal);
        localStorage.setItem('discount-key', 'countinue');
      }, 800);
    }


    return () =>{
      clearTimeout(loginTime)
      clearTimeout(discountTime)
    }
  }, [targetDetected ]);


  return (
    <Suspense fallback={<><p>Loading....</p></>}>
      <ModalPopUp open={loginModal} setLoginModal={setLoginModal} />
      <DiscountPopUp couponModal={couponModal} setCouponModal={setCouponModal} />
      <TargetImage setTargetDetacted={setTargetDetacted} targetDetected={targetDetected} />
    </Suspense>
  )
}

export default ShowTarget