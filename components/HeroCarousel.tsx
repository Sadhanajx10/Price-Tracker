"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
    { id: 1, imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch' },
    { id: 2, imgUrl: '/assets/images/hero-2.svg', alt: 'bag' },
    { id: 3, imgUrl: '/assets/images/hero-3.svg', alt: 'lamp' },
    { id: 4, imgUrl: '/assets/images/hero-4.svg', alt: 'air fryer' },
    { id: 5, imgUrl: '/assets/images/hero-5.svg', alt: 'chair' },
];

const HeroCarousel = () => {
    return (
        <div className="hero-carousel">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={2000}
                showArrows={false}
                showStatus={false}
            >
                {heroImages.map((image) => (
                    <Image
                        key={image.id} // Use the unique id as the key
                        src={image.imgUrl}
                        alt={image.alt}
                        width={484}
                        height={484}
                        className="object-contain"
                        priority={true}
                    />
                ))}
            </Carousel>

            <Image
                src="assets/icons/hand-drawn-arrow.svg"
                alt="arrow"
                width={175}
                height={175}
                className="max-xl:hidden absolute -left-[15%] bottom-0"
            />
        </div>
    );
};

export default HeroCarousel;
