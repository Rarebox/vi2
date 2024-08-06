// src/Components/Profile/Patient/ProfileInfo.jsx
import React from "react";
import styles from "./style.module.css";

const ProfileInfo = ({ auth }) => {
    const profilePhoto = auth.user.profile_image ? 'images/' + auth.user.profile_image : 'images/profile.png';
    
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.profilePhotoContainer}>
                    <img src={profilePhoto} className={styles.profilePhoto} alt="Profile" />
                </div>
                <div className={styles.infoContainer}>
                    <h6 className={styles.name}>{auth.user.username}<span> </span>{auth.user.name}</h6>
                    <p className={styles.email}>{auth.user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
