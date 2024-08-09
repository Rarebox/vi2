import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../../Components/NavBar/index';

export default function Create({ auth, success, username, name, email }) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        window.location.href = '/';
    }

    useEffect(() => {
        if (success) {
            setShow(true);
        }
    }, [success]);

    return (
        <>
            <Navbar user={auth.user} />

            <div className="bg-gray-100 h-full md:h-screen flex items-center justify-center">
                <Head title="Patient Created" />

                {success && (
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Success</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>The patient has been successfully created.</p>
                            <p><strong>Username:</strong> {username}</p>
                            <p><strong>Name:</strong> {name}</p>
                            <p><strong>Email:</strong> {email}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                OK
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )}
            </div>
        </>
    );
}
