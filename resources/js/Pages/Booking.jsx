import React, { useState } from 'react';
// import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import './Booking.css'; // Stil dosyanızı buradan import edin
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import de from 'date-fns/locale/de'; // Almanca dil desteği
import Navbar from '../Components/NavBar/index'
// Almanca dil desteğini kaydedin
registerLocale('de', de);

const Booking = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        date: new Date(),
        time: 'morning',
        reservationType: 'videosprechstunde', // Varsayılan değer eklendi
        insuranceType: '',
        policyNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleDateChange = (date) => {
        setFormData(prevData => ({
            ...prevData,
            date
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form verilerini işleme mantığını buraya ekleyin
        console.log(formData);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                <h1 className="booking-title"></h1>
                <form className="booking-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">Vorname:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Nachname:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Datum:</label>
                        <DatePicker
                            selected={formData.date}
                            onChange={handleDateChange}
                            dateFormat="dd.MM.yyyy"
                            locale="de"
                            id="date"
                            name="date"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="time">Stunde:</label>
                        <select
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        >
                            <option value="morning">Morgen</option>
                            <option value="noon">Mittag</option>
                            <option value="afternoon">Nachmittag</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="reservationType">Reservierungstyp:</label>
                        <select
                            id="reservationType"
                            name="reservationType"
                            value={formData.reservationType}
                            onChange={handleChange}
                            required
                        >
                            <option value="videosprechstunde">Videosprechstunde</option>
                            <option value="vorOrtTermin">Vor-Ort-Termin</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="insuranceType">Versicherungstyp:</label>
                        <input
                            type="text"
                            id="insuranceType"
                            name="insuranceType"
                            value={formData.insuranceType}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="policyNumber">Versicherungspolicenummer:</label>
                        <input
                            type="text"
                            id="policyNumber"
                            name="policyNumber"
                            value={formData.policyNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-button">Einreichen</button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Booking;
