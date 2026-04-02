import React from 'react';

function Index() {
    return (
        <div>
            <section className="text-white">
                <div className="container px-4 sm:px-6 lg:px-8 py-16 sm:py-20 mx-auto">
                    <div className="text-center mb-14">
                        <h2
                            id="faqs"
                            className="mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white relative inline-block max-w-fit 
                            after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:w-75 sm:after:w-92 md:after:w-40 lg:after:w-150 
                            after:h-1 after:bg-[#114B9F] after:rounded-lg after:-translate-x-1/2"
                        >
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:w-4/5 mx-auto gap-4">
                        <div className="w-full lg:w-1/2 px-2">
                            {[
                                {
                                    question: "1. What type of services do you offer?",
                                    answer:
                                        "We provide expert services in web development, graphic design, digital marketing, cybersecurity, video editing, branding, and UX/UI design. Let us help bring your vision to life!"
                                },
                                {
                                    question: "Q2. How much cost to design a website?",
                                    answer:
                                        "Our pricing depends on the project's scope and complexity. Feel free to contact us for a detailed quote."
                                },
                                {
                                    question: "Q3. Do you offer custom design?",
                                    answer:
                                        "We offer fully custom design solutions tailored to your brand’s unique identity and goals. While we can work with templates."
                                }
                            ].map((faq, idx) => (
                                <details key={idx} className="faq-item mb-4 group">
                                    <summary className="font-semibold py-2 px-4 cursor-pointer text-white transition-all duration-300 border-b border-blue-900">
                                        {faq.question}
                                    </summary>
                                    <span className="block px-4 py-2 transition-all duration-300 group-open:max-h-full group-open:opacity-100 group-open:block opacity-0 max-h-0 overflow-hidden">
                                        {faq.answer}
                                    </span>
                                </details>
                            ))}
                        </div>

                        <div className="w-full lg:w-1/2 px-2">
                            {[
                                {
                                    question: "4. Can I update my website after launch?",
                                    answer:
                                        "Yes, we provide content management solutions that allow you to update your website. We also offer ongoing maintenance services if needed."
                                },
                                {
                                    question: "5. How can I get a quote for my project?",
                                    answer:
                                        "You can contact us through our website, email, or phone with your project details, and we’ll provide a customized quote based on your requirements."
                                },
                                {
                                    question: "6. What makes your agency different?",
                                    answer:
                                        "Delivering a wide range of marketing services and providing result-driven strategies is what makes us stand out. Our experienced and dedicated teammates not only help you master the subject but also guarantee long-term commitment."
                                }
                            ].map((faq, idx) => (
                                <details key={idx} className="faq-item mb-4 group">
                                    <summary className="font-semibold py-2 px-4 cursor-pointer text-white transition-all duration-300 border-b border-blue-900">
                                        {faq.question}
                                    </summary>
                                    <span className="block px-4 py-2 transition-all duration-300 group-open:max-h-full group-open:opacity-100 group-open:block opacity-0 max-h-0 overflow-hidden">
                                        {faq.answer}
                                    </span>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Index;
