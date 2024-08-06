import React, { useState } from "react";
import styles from "./style.module.css";
import { useForm } from '@inertiajs/react';

const PersonalInformation = ({ auth }) => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = auth.user.profile_image
    ? useState('/images/' + auth.user.profile_image)
    : useState('https://via.placeholder.com/150');
  const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
    profileImage: null,
    userName: auth.user.username ? auth.user.username : '',
    name: auth.user.name ? auth.user.name : '',
    email: auth.user.email ? auth.user.email : '',
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file.type.match(/image\/(png|jpg|jpeg)/)) {
      setFile(file);
      setData('profileImage', file);
      previewFile(file);
    } else {
      console.error('Unsupported file type');
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setPreviewUrl(reader.result);
    });
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('profile.update'));
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h4 className={styles.title}>Persönliche Daten</h4>
        <p className={styles.info}>
          Hier können Sie Ihre persönlichen Daten aktualisieren.
        </p>
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.imageContainer}>
            <img src={previewUrl} alt="profile" className={styles.image} />
            <div className={styles.uploadBtn} onClick={() => { document.getElementById('image').click(); }} role="div">
              Bild hochladen
            </div>
            <p className={styles.imageInfo}>Hochgeladene Bildgröße: 800 x 800 Pixel.</p>
            <input type="file" id="image" style={{ display: 'none' }} onChange={handleFileChange} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="userName" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              className={styles.input}
              placeholder="ritaaagreiner"
              onChange={(e) => { setData('userName', e.target.value); }}
              value={data.userName}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Nachname
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.input}
              placeholder="Rita Greiner"
              onChange={(e) => { setData('name', e.target.value); }}
              value={data.name}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.input}
              placeholder="ritagreiner@gmail.com"
              onChange={(e) => { setData('email', e.target.value); }}
              value={data.email}
            />
          </div>

          <div className={styles.btnGroup}>
            <button type="button" className={styles.cancelBtn}>ABBRECHEN</button>
            <button type="submit" className={styles.saveBtn}>Speichern</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInformation;
