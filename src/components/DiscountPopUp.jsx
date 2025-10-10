import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Typography } from '@mui/material';

const DiscountPopUp = ({couponModal,setCouponModal}) => {

    const handleCountinue = () => {
        localStorage.setItem('discount-key', 'done');
        localStorage.clear();
        setCouponModal(false);
    }

    return (
        <React.Fragment>
            <Dialog open={couponModal} sx={{ bgcolor: 'transparent' }}>
                <DialogContent>
                    <DialogContentText sx={{ mb: 2 }}>
                        🎉 Congratulations! You’ve unlocked your exclusive discount coupon — don’t miss out on your savings!
                    </DialogContentText>
                    <Typography variant="h5" textAlign={'center'}>Responsive h5</Typography>

                    <Button variant="contained" disableElevation sx={{ width: '100%', mt: 2 }} onClick={handleCountinue}>
                        Continue
                    </Button>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default DiscountPopUp