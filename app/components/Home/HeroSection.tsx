"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS styles are imported
import Image from "next/image";

const HeroSection: React.FC = () => {
    useEffect(() => {
        // Initialize AOS for animations
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });

        // Dynamically import glightbox on client-side
        if (typeof window !== "undefined") {
            import("glightbox").then((module) => {
                const GLightbox = module.default;
                GLightbox({
                    selector: ".glightbox",
                });
            });
        }
    }, []);

    return (
        <section id="hero" className="hero section dark-background">
            {/* Ensure your image path is absolute or use Next.js public folder */}
            <Image
                width={1920}
                height={1080}
                src="/assets/img/hero-bg.jpg" // Ensure this path is correct
                alt="Hero Background"
                data-aos="fade-in"
                priority
            />

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <h2>Sakib Malik</h2>
                <p>
                    I&apos;m
                    <span className="typed" data-typed-items="Developer, Freelancer">
                        Software Developer
                    </span>
                    <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
