"use client";

import { useState } from "react";
import Image from "next/image";
import "./CasketGallery.scss";

interface Props {
    mainImage: string;
    gallery: string[];
    title: string;
}

export default function CasketGallery({ mainImage, gallery, title }: Props) {
    const images = gallery && gallery.length > 0 ? gallery : [mainImage];
    const [activeImage, setActiveImage] = useState(images[0] || mainImage);

    return (
        <div className="casket-gallery-wrapper">
            <div className="main-image-box">
                <Image
                    src={activeImage}
                    alt={title}
                    fill
                    sizes="(max-width: 991px) 100vw, 50vw"
                    priority
                />
            </div>

            {images.length > 1 && (
                <div className="gallery-thumbnails">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            className={`thumb-btn ${activeImage === img ? "active" : ""}`}
                            onClick={() => setActiveImage(img)}
                        >
                            <Image src={img} alt={`${title} ${idx + 1}`} fill sizes="80px" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}