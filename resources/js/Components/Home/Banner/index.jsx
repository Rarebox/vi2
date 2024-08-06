import React from "react";
import styles from "./style.module.css";
import SelectBox from "../../SelectBox";
import { Link } from "@inertiajs/react";
import Stepper from "../Stepper";
import { TbBuildingBank } from "react-icons/tb";
import { IoVideocamOutline } from "react-icons/io5";
import bannerImage from "../../../Assets/Home/banner/banner-image.jpeg"


const Banner = (employees) => {
    return (
        <div
        className="relative w-full h-screen bg-cover bg-no-repeat bg-center flex flex-col md:flex-row justify-center items-center bg-gray-900/50 "
        style={{
      
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover"
        }}
    >
            <div className="absolute inset-0 bg-gray-900/50 pointer-events-none"></div>
            <div className="absolute flex flex-col justify-center items-center">
                <h3
                    className={` text-white font-bold text-2xl leading-10 tracking-tight  sm:text-3xl sm:leading-none sm:tracking-tighter mt-2 mb-4 sm:mb-8 flex justify-center items-center`}
                >
                    {/* ARZT FINDEN LEICHT */}
                    Videoberatung Deutschlandweit
                </h3>
                <div>
                <h2 className={`${styles.title} lg:whitespace-nowrap whitespace-normal text-center text-white font-extrabold text-4xl sm:leading-[67px] tracking-tight sm:text-6xl leading-none sm:tracking-tighter  mb-3 sm:mb-6`}>
                        Buchen Sie jetzt einen
                        <br />
                        <span className="flex justify-center items-center mt-2">
                            Pflegeberatungstermin via Videokonferenz
                        </span>
                    </h2>
                </div>

                {/* <p className="text-white text-base sm:text-lg font-normal leading-7 tracking-tight text-center px-2 sm:px-0">
                    Gesundheit ist eines der wichtigsten Dinge für uns, da für
                    sofort überprüfen Sie Ihre Gesundheit für Sie
                </p> */}

                {/* <div className="mt-10 flex flex-col md:flex-row gap-4">
                    <Link
                        href={route("doctor.doctorList", { tab: "tab1" })}
                        className="flex items-center gap-2 bg-[#ca9b31] hover:bg-[#f9f8f2] border-2 border-[#ca9b31] hover:text-[#ca9b31]  text-white font-medium text-lg px-4 py-3 rounded-xl shadow-md   transition duration-150 ease-in-out"
                    >
                        <TbBuildingBank />
                        Vor-Ort-Termin
                    </Link>
                    <Link
                        href={route("doctor.doctorList", { tab: "tab2" })}
                        className="flex items-center gap-2 bg-[#ca9b31] hover:bg-[#f9f8f2] hover:border hover:border-[#ca9b31] hover:text-[#ca9b31]  text-white font-medium text-lg px-4 py-3 rounded-xl shadow-md   transition duration-150 ease-in-out"
                    >
                        <IoVideocamOutline />
                        Videosprechstunde
                    </Link>
                </div> */}

                <SelectBox employees={employees} />
            </div>
            {/* <div className={styles.leftSide}>
                <img src={bannerImg} alt="" className={styles.bannerImg} />
            </div> */}
            <div className="absolute lg:-bottom-40 md:-bottom-52 -bottom-[460px] w-full px-12 ">
                <Stepper />
            </div>
        </div>
    );
};

export default Banner;
