// src/Pages/VerifyEmail.jsx
import { useEffect, useState } from "react";
import Navbar from "@/Components/Navbar";
import { Head, useForm } from "@inertiajs/react";
import logo from "../../Assets/Logo.png";
import www from "../assets/icons/www.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import Footer from "@/Components/Footer";

export default function VerifyEmail({ auth, status }) {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        // Kullanıcı bilgilerini al
        if (auth && auth.user) {
            setUserInfo({
                username: auth.user.username,
                name: auth.user.name,
            });
        }
    }, [auth]);

    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route("verification.send"));
    };

    return (
        <>
            <Navbar user={auth.user} />
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                <Head title="Email Verification" />

                <div className="flex flex-col justify-start items-start text-left p-8 w-full ">
                    <div>
                        <strong>
                            Hallo,{" "}
                            {userInfo
                                ? `${userInfo.username} ${userInfo.name}`
                                : "Kullanıcı"}
                        </strong>
                        <br />
                        <br />
                        <span>
                            Vielen Dank für Ihre Registrierung. Sie müssen Ihre
                            E-Mail Adresse bestätigen. Dazu haben wir Ihnen
                            gerade eine E-Mail mit einem Bestätigungslink
                            geschickt. Bitte schauen Sie in Ihrem Postfach nach
                            und bestätigen Sie bitte Ihre E-Mail Adresse.
                        </span>
                        <br />
                        <br />
                        <span>
                            Bei Fragen oder Problemen stehen wir Ihnen gerne zur
                            Verfügung:
                            <strong>
                                0209 95 90 14 85
                                <a href="mailto:pflegeberatung@vip-vitalisten.de">
                                    pflegeberatung@vip-vitalisten.de
                                </a>
                            </strong>
                        </span>
                    </div>
                </div>

                <form onSubmit={submit}>
                    <button
                        disabled={processing}
                        type="submit"
                        className="bg-[#ca9b31] text-2xl font-semibold rounded-md p-4 mt-20"
                    >
                        E-Mail Adresse hier bestätigen
                    </button>
                </form>

                
                {status === "verification-link-sent" && (
                    <div className="mb-4 font-medium text-sm text-[#ca9b31]">
                        Vielen Dank für Ihre Registrierung. Sie müssen Ihre
                        E-Mail Adresse bestätigen. Dazu haben wir Ihnen gerade
                        eine E-Mail mit einem Bestätigungslink geschickt. Bitte
                        schauen Sie in Ihrem Postfach nach und bestätigen Sie
                        bitte Ihre E-Mail Adresse.
                    </div>
                )}

            </div>

            <Footer />

        </>
    );
}
