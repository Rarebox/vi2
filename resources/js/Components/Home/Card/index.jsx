import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
import { Link } from "@inertiajs/react";

const Card = ({ title, img, text, link, linkText, direction }) => {
    const imgRef = useRef(null);

    useEffect(() => {
        if (imgRef.current) {
            imgRef.current.addEventListener("load", () => {
                imgRef.current.classList.add(styles["card-img-loaded"]);
            });
        }
    }, []);

    const imgClass = direction === "right" ? styles["card-img"] : styles["card-img-reverse"];

    return (
        <div className="flex md:flex-row flex-col justify-center items-center w-full bg-[#fafafa] md:p-0 p-4 overflow-hidden">
            {direction === "right" ? (
                <>
                    <div className="md:w-1/2 w-full md:py-0 my-8 md:px-8 px-4 grid gap-4">
                        <h4 className="text-[#ca9b31] text-[25px] font-normal capitalize">
                            {title}
                        </h4>
                        <p className="text-gray-900 text-lg font-normal leading-loose break-words">
                            {text}
                        </p>
                    </div>
                    <div className="flex md:w-1/2 w-full h-full object-cover">
                        <img
                            ref={imgRef}
                            src={img}
                            alt=""
                            className={`w-full h-full object-cover transition duration-1000 ${imgClass}`}
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className="flex md:w-1/2 w-full h-full object-cover">
                        <img
                            ref={imgRef}
                            src={img}
                            alt=""
                            className={`w-full h-full object-cover transition duration-1000 ${imgClass}`}
                        />
                    </div>
                    <div className="md:w-1/2 w-full md:py-0 my-8 md:px-8 px-4 grid gap-4">
                        <h4 className="text-[#ca9b31] text-[25px] font-normal capitalize">
                            {title}
                        </h4>
                        <p className="text-gray-900 text-lg font-normal leading-loose break-words">
                            {text}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Card;
