
import React, { lazy, Suspense, useEffect, useState } from 'react';
import ModalPopUp from '../components/RegistraionPopUp';
import DiscountPopUp from '../components/DiscountPopUp';
const TargetImage = lazy(() => import('../components/TargetImage'));

const ShowTarget = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [couponModal, setCouponModal] = useState(false);
  const [targetDetected, setTargetDetected] = useState(false);
  const modalKey = localStorage.getItem('modal-key');
  const discountKey = localStorage.getItem('discount-key');

  useEffect(() => {
    let loginTimer;
    let discountTimer;

    if (targetDetected) {
      if (modalKey === 'countinue' || !modalKey) {
        localStorage.setItem('modal-key', 'countinue')
        loginTimer = setTimeout(() => {
          setLoginModal(true);
        }, 500);
      }
    } else {
      setLoginModal(false);
      setCouponModal(false);
    }

    return () => {
      clearTimeout(loginTimer);
      clearTimeout(discountTimer);
    };
  }, [targetDetected, modalKey]);

  useEffect(() => {
    let discountTimer;
    if (!targetDetected) return;

    if (localStorage.getItem('modal-key') === 'done' && (!loginModal || loginModal === 'countinue' )) {
      localStorage.setItem('discount-key', 'countinue')
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
