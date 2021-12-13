import { Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import ButtonX from '../../../Shared/Button/Button';
import CardX from '../../../Shared/Card/Card';

const StepOtp = ({onNext}) => {

    const [otp, setOtp] = useState('');
    const notify = () => toast("OTP Valid");
    
    return (
        <div className="card-wrapper-center">
            <CardX title="Enter the code we just texted you" icon="otp">
                <div>
                    <Input
                        onChange={(event) => setOtp(event.target.value)}
                        value={otp}
                        width="240px"
                        className="input_box "
                        placeholder="8181"
                        color="#262626"/>
                    <ButtonX onClick={() => {
                        notify()
                        // onNext(1)
                    }} text="Next"/>
                    <ToastContainer />
                </div>
            </CardX>
        </div>
    )
}

export default StepOtp
