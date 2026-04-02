import React, { useState } from "react";

const servicesData = [
    {
        title: "Graphic Designing",
        description:
            "Creating visually compelling designs, including logos, branding, UI/UX, and marketing materials, to elevate brand identity, engage audiences, and enhance market presence.",
        details:
            "Design CodeX offers creative and impactful graphic design solutions to elevate your brand identity. From logos and branding to social media visuals and marketing materials, we craft eye-catching designs that leave a lasting impression. Our team combines creativity with strategy to deliver visually compelling graphics. Stand out with our innovative and professional design services.",
        icon: "💡",
        color: "#00bcd4",
    },
    {
        title: "Digital Marketing",
        description:
            "Content isn’t just king; it’s a brand’s voice. The right words capture attention, stop scrolling, engage readers, build trust, and inspire action instantly.",
        details:
            "Every piece of content is tailored to connect, build trust, and drive engagement that turns interest into outcomes.",
        icon: "📝",
        color: "#ff9800",
    },
    {
        title: "Web Development",
        description:
            "Crafting responsive, user-friendly, and high-performance websites to strengthen your brand’s online presence, engage audiences, and drive meaningful interactions.",
        details:
            "Design CodeX offers cutting-edge web development solutions tailored to your business needs. We create fast, responsive, and user-friendly websites that enhance engagement and drive results. Our expertise spans from custom websites to e-commerce platforms, ensuring seamless functionality and stunning design. Elevate your online presence with our innovative web solutions.",
        icon: "📺",
        color: "#4caf50",
    },
    {
        title: "UI/UX Design",
        description:
            "Design CodeX crafts intuitive, engaging UI/UX designs that elevate user experience, enhance functionality, and drive meaningful interactions for brands.",
        details:
            "Design CodeX specializes in creating intuitive, user-friendly, and visually appealing UI/UX designs. We focus on seamless navigation, engaging interfaces, and responsive designs to enhance user experience. Our design approach combines creativity and usability to deliver products that captivate and convert. Elevate your digital presence with our expertly crafted UI/UX solutions.",
        icon: "🖌️",
        color: "#4caf50",
    },
    {
        title: "Video Editing",
        description:
            "We create high-quality video content, animations, and edits that captivate audiences, enhance storytelling, and boost engagement across digital platforms.",
        details:
            "Design CodeX delivers professional video editing services to bring your vision to life. We craft high-quality, engaging, and visually stunning videos tailored to your brand’s needs. From cinematic edits to social media content, our expert team enhances storytelling with seamless transitions, effects, and color grading. Elevate your content with our creative video editing solutions.",
        icon: "🎬",
        color: "#4caf50",
    },
    // {
    //     title: "App Development",
    //     description:
    //         "Design Codex builds powerful Android, iOS, and cross-platform apps that bring your ideas to life. We combine innovative design with cutting-edge technology.",
    //     details:
    //         "At Design Codex, we craft innovative mobile apps for Android, iOS, and cross-platform needs.Our expert team ensures sleek design, flawless performance, and user-friendly experiences.Turn your ideas into powerful apps and grow your digital presence with us!",
    //     icon: "📺",
    //     color: "#4caf50",
    // },
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const handleReadMore = (service) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    return (
        <div id="services" className="px-4 py-8 text-center">
            <h2
    className="mb-10 text-2xl sm:text-3xl md:text-4xl font-semibold text-white relative inline-block 
    after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:w-32 sm:after:w-40 md:after:w-50 
    after:h-1 after:bg-[#114B9F] after:rounded-lg after:-translate-x-1/2"
>
    Our Services
</h2>


            <div className="grid max-w-screen-xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-xl shadow-md flex flex-col justify-between h-full border-4"
                        style={{ borderColor: "#114B9F", background: "linear-gradient(to bottom, #114B9F, black)" }}
                    >
                        <div className="flex  items-center">
                            <span className="text-4xl absolute -mt-8 bg-white px-2 py-2 rounded-full border-4"
                                style={{ borderColor: "#114B9F" }}>
                                {service.icon}
                            </span>
                        </div>
                        <h3 className="mt-8 text-xl font-semibold text-white">
                            {service.title}
                        </h3>
                        <p className="mt-2 text-sm text-white">
                            {service.description}
                        </p>
                        <button
                            className="mt-4 font-semibold text-[#114B9F] transition duration-200 transform hover:text-indigo-700"
                            onClick={() => handleReadMore(service)}
                        >
                            Read More →
                        </button>
                    </div>
                ))}
            </div>

            {selectedService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50" onClick={closeModal}>
                    <div className="w-full max-w-lg p-6 text-center  rounded-xl" onClick={(e) => e.stopPropagation()}
                        style={{ borderColor: "#114B9F", background: "linear-gradient(to bottom, #114B9F, black)" }}>
                        <h3 className="text-xl font-semibold text-white">{selectedService.title}</h3>
                        <p className="mt-2 text-sm text-white">{selectedService.details}</p>
                        <button
                            className="px-6 py-2 mt-4 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
