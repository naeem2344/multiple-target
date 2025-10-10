import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const ModalPopUp = ({ open, setLoginModal }) => {
    const [userNumber, setUserNumber] = useState('');
    const [isUserEnterNumber, setIsUserEnterNumber] = useState(false);
    const [isValidateUser, setIsValidateUser] = useState(false);

    const handleClose = () => {
        setLoginModal(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userNumber);
        setIsUserEnterNumber(!isUserEnterNumber)
        setIsValidateUser(true)
    };

    const handleCountinue = (event) => {
        event.preventDefault();
        console.log(userNumber);
        localStorage.setItem('modal-key', 'done');
        handleClose();
    }

    const handleNumberChange = (e) => {
        const value = e.target.value;
        setUserNumber(value);
        setIsUserEnterNumber(value.trim().length > 0);
    };

    return (
        <React.Fragment>
            <Dialog open={true} sx={{ bgcolor: 'transparent' }}>
                <DialogContent>
                    <DialogContentText sx={{ mb: 2 }}>
                        To subscribe to this offer, please enter your phone number or continue with your email address below. You’ll receive an exclusive discount upon subscribing.
                    </DialogContentText>

                    <TextField
                        required
                        margin="dense"
                        value={userNumber}
                        id="phone"
                        name="phone"
                        label="Enter your number"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={handleNumberChange}
                    />

                    <GoogleOAuthProvider clientId="<your_client_id>" >
                        <GoogleLogin
                            onSuccess={(credentialResponse) => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </GoogleOAuthProvider>

                    {isUserEnterNumber && (
                        <Button
                            variant="contained"
                            disableElevation
                            onClick={handleSubmit}
                            sx={{ width: '100%', mt: 3 }}
                        >
                            Validate
                        </Button>
                    )}

                    {isValidateUser && <Button variant="contained" disableElevation sx={{ width: '100%', mt: 2 }} onClick={handleCountinue}>
                        Continue
                    </Button>}
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
};

export default ModalPopUp;
