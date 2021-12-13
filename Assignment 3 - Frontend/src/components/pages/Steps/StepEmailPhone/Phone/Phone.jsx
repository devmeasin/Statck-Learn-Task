import { Input } from '@nextui-org/react';
import React, { useState } from 'react';
import ButtonX from '../../../../Shared/Button/Button';
import CardX from '../../../../Shared/Card/Card';
import styles from '../EmailPhone.module.css';

const Phone = ({onNext}) => {

    const [phone, setPhone] = useState('')

    return (
        <div>
            <CardX title="Enter you phone number" icon="tel">
                <div className={styles.phonewrapper}>
                    <Input
                        onChange={(event) => setPhone(event.target.value)}
                        value={phone}
                        width="240px"
                        className="input_box "
                        placeholder="+88019000000"
                        color="#262626"/>
                    <ButtonX onClick={() =>  onNext(2)} text="Next"/>
                    <p>By entering your number, you’re agreeing to our Terms of Service and Privacy
                        Policy. Thanks!</p>
                </div>
            </CardX>
        </div>
    )
}

export default Phone
