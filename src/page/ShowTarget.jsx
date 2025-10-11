// import React, { lazy, Suspense, useEffect, useState } from 'react'
// import ModalPopUp from '../components/RegistraionPopUp';
// import DiscountPopUp from '../components/DiscountPopUp';
// const TargetImage = lazy(() => import('../components/TargetImage'));

// const ShowTarget = () => {
//   const [loginModal, setLoginModal] = useState(false);
//   const [couponModal, setCouponModal] = useState(false);
//   const [targetDetected, setTargetDetacted] = useState(false);
//   const modalKey = localStorage.getItem('modal-key');
//   const discountKey = localStorage.getItem('discount-key');

//   useEffect(() => {
//     let loginTime;
//     let discountTime;

//     if (targetDetected && (modalKey === 'countinue' || !modalKey)) {
//       // Show the login modal after 5sec and update the localStorage to countinue
//       loginTime = setTimeout(() => {
//         setLoginModal(!loginModal)
//         localStorage.setItem('modal-key', 'countinue');
//       }, 500)
//     }
//     // Show the modal of generate token and copy/save the token after 8 sec
//     if (targetDetected && modalKey === 'done' && (discountKey === 'countinue' || !discountKey)) {
//       // Show Show the discount modal after 8sec and update the localStorage to countinue
//       discountTime = setTimeout(() => {
//         setCouponModal(!couponModal);
//         localStorage.setItem('discount-key', 'countinue');
//       }, 800);
//     }


//     return () => {
//       clearTimeout(loginTime)
//       clearTimeout(discountTime)
//     }
//   }, [targetDetected, modalKey, discountKey]);


//   return (
//     <Suspense fallback={<><p>Loading....</p></>}>
//       <ModalPopUp open={loginModal} setLoginModal={setLoginModal} />
//       <DiscountPopUp couponModal={couponModal} setCouponModal={setCouponModal} />
//       <TargetImage setTargetDetacted={setTargetDetacted} targetDetected={targetDetected} />
//     </Suspense>
//   )
// }

// export default ShowTarget




import React, { lazy, Suspense, useEffect, useState } from 'react';
import ModalPopUp from '../components/RegistraionPopUp';
import DiscountPopUp from '../components/DiscountPopUp';
const TargetImage = lazy(() => import('../components/TargetImage'));

const ShowTarget = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [couponModal, setCouponModal] = useState(false);
  const [targetDetected, setTargetDetected] = useState(false);

  useEffect(() => {
    let loginTimer;
    let discountTimer;

    if (targetDetected) {
      // Step 1: show login modal after 0.5s
      loginTimer = setTimeout(() => {
        setLoginModal(true);
      }, 500);
    } else {
      // If target lost — close everything
      setLoginModal(false);
      setCouponModal(false);
    }

    return () => {
      clearTimeout(loginTimer);
      clearTimeout(discountTimer);
    };
  }, [targetDetected]);

  // This effect runs when user finishes login
  useEffect(() => {
    let discountTimer;
    if (!targetDetected) return;

    // Step 2: once login done, show discount modal after 0.8s
    if (localStorage.getItem('modal-key') === 'done') {
      discountTimer = setTimeout(() => {
        setCouponModal(true);
      }, 800);
    }

    return () => clearTimeout(discountTimer);
  }, [targetDetected, loginModal]);

  return (
    <Suspense fallback={<p>Loading....</p>}>
      <ModalPopUp open={loginModal} setLoginModal={setLoginModal} />
      <DiscountPopUp couponModal={couponModal} setCouponModal={setCouponModal} />
      <TargetImage setTargetDetacted={setTargetDetected} targetDetected={targetDetected} />
    </Suspense>
  );
};

export default ShowTarget;
