import React, { useState } from "react";
import styles from "./style.module.css";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const CreatePatient = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [retypePasswordVisible, setRetypePasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleRetypePasswordVisibility = () => {
        setRetypePasswordVisible(!retypePasswordVisible);
    };

    return (
        <div className={styles.createPatientContainer}>
            <h2>Patienten anlegen</h2>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Vorname</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="lastName">Nachname</label>
                    <input type="text" id="lastName" name="lastName" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className={`${styles.formGroup} ${styles.passwordGroup}`}>
                    <label htmlFor="password">Passwort</label>
                    <input
                        type={passwordVisible ? "text" : "password"}
                        id="password"
                        name="password"
                    />
                    <div
                        className={styles.passwordIcon}
                        onClick={togglePasswordVisibility}
                    >
                        {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </div>
                </div>
                <div className={`${styles.formGroup} ${styles.passwordGroup}`}>
                    <label htmlFor="retypePassword">Passwort bestätigen</label>
                    <input
                        type={retypePasswordVisible ? "text" : "password"}
                        id="retypePassword"
                        name="retypePassword"
                    />
                    <div
                        className={styles.passwordIcon}
                        onClick={toggleRetypePasswordVisibility}
                    >
                        {retypePasswordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </div>
                </div>
                <button type="submit" className={styles.createButton}>Patienten anlegen</button>
            </form>
        </div>
    );
};

export default CreatePatient;
