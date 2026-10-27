"use client";

import Image from "next/image";
import "./loading.scss";

export default function Loading() {
    return (
        <div className="global-loader-wrapper">
            <div className="loader-backdrop-glow"></div>

            <div className="loader-content-box">
                <div className="logo-pulse-container">
                    <div className="logo-wrapper">
                        <Image
                            src="/logo.png"
                            alt="Radwan Funeral Services"
                            width={90}
                            height={80}
                            style={{ width: "auto", height: "auto" }}
                            priority
                        />
                    </div>
                    <div className="pulse-ring"></div>
                </div>

                <div className="custom-spinner">
                    <div className="spinner-arc"></div>
                </div>

                <div className="loading-dots-text">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        </div>
    );
}