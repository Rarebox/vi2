import React, { useState } from "react";
import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError'; // Import InputError
import styles from "./style.module.css";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const CreatePatient = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [retypePasswordVisible, setRetypePasswordVisible] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        username: '',
        email: '',
        password: '',
        retypePassword: ''
    });

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleRetypePasswordVisibility = () => {
        setRetypePasswordVisible(!retypePasswordVisible);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('create.patient'));
    };

    return (
        <div className={styles.createPatientContainer}>
            <h2>Patienten anlegen</h2>
            <form className={styles.form} onSubmit={submit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Nutzername</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                    <InputError error={errors.name} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="username">Name</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={data.username}
                        onChange={handleChange}
                    />
                    <InputError error={errors.username} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                    <InputError error={errors.email} />
                </div>
                <div className={`${styles.formGroup} ${styles.passwordGroup}`}>
                    <label htmlFor="password">Passwort</label>
                    <input
                        type={passwordVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                    />
                    <div
                        className={styles.passwordIcon}
                        onClick={togglePasswordVisibility}
                    >
                        {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </div>
                    <InputError error={errors.password} />
                </div>
                <div className={`${styles.formGroup} ${styles.passwordGroup}`}>
                    <label htmlFor="retypePassword">Passwort bestätigen</label>
                    <input
                        type={retypePasswordVisible ? "text" : "password"}
                        id="retypePassword"
                        name="retypePassword"
                        value={data.retypePassword}
                        onChange={handleChange}
                    />
                    <div
                        className={styles.passwordIcon}
                        onClick={toggleRetypePasswordVisibility}
                    >
                        {retypePasswordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </div>
                    <InputError error={errors.retypePassword} />
                </div>
                <button type="submit" className={styles.createButton} disabled={processing}>Patienten anlegen</button>
            </form>
        </div>
    );
};

export default CreatePatient;
