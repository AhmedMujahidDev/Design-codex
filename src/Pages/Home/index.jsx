import React, { useState, useEffect } from "react";
import videoFile from "../../assets/video.mp4";

const services = ["WEB DEVELOPMENT", "DIGITAL MARKETING", "GRAPHIC DESIGNING", "VIDEO EDITING", "UI/UX DESIGN"]; // Add more services

const HeroSection = () => {
    const [text, setText] = useState("");
    const [serviceIndex, setServiceIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentService = services[serviceIndex];
        if (!isDeleting && charIndex < currentService.length) {
            // Typing effect
            setTimeout(() => {
                setText((prev) => prev + currentService.charAt(charIndex));
                setCharIndex((prev) => prev + 1);
            }, 150);
        } else if (isDeleting && charIndex > 0) {
            // Deleting effect
            setTimeout(() => {
                setText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            }, 150);
        } else if (!isDeleting && charIndex === currentService.length) {
            // Wait before deleting
            setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && charIndex === 0) {
            // Move to next service after deleting
            setIsDeleting(false);
            setServiceIndex((prev) => (prev + 1) % services.length);
        }
    }, [charIndex, isDeleting, serviceIndex]);

    return (
        <div id="home" className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={videoFile} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-50"></div>

            {/* Content */}
            <div className="relative text-center px-6 max-w-4xl mx-auto">
                <h1 className="text-xl md:text-4xl lg:text-4xl  leading-tight">
                    Welcome to Design Codex – Your Digital Transformation Partner!
                    <br /> EXPERT IN&nbsp;
                    <span className="text-blue-400 font-semibold">{text}</span>
                    <span className="animate-blink">|</span>
                </h1>

                <div className="mt-6 flex flex-row sm:flex-row justify-center gap-4">
                    <a href="#contact">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-lg font-semibold shadow-lg transition w-full sm:w-auto mt-2 sm:ml-4">
                            Contact Us
                        </button>

                    </a>

                    <a href="#about">
                        <button className="border border-blue-500 hover:bg-blue-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-lg font-semibold shadow-lg transition w-full sm:w-auto mt-2 sm:ml-4">
                            Learn More
                        </button>
                    </a>


                </div>
            </div>
        </div>
    );
};

export default HeroSection;
