import React, { useState } from 'react';
import web1 from '../../assets/web1.png';
import web2 from '../../assets/web2.png';
import web3 from '../../assets/web3.png';
import web4 from '../../assets/web4.png';
import fluter2 from '../../assets/fluter2.png';
import fluter3 from '../../assets/fluter3.png';
import fluter4 from '../../assets/fluter4.png';
import design2 from '../../assets/design2.jpg';
import design3 from '../../assets/design3.jpg';
import design4 from '../../assets/design4.jpg';
import marketer1 from '../../assets/marketing1.jpg';
import marketer2 from '../../assets/marketing2.jpg';
import marketer3 from '../../assets/marketing3.jpg';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const project = [
        { id: 1, title: 'UI Design', domain: 'Web Development', image: web1 },
        { id: 2, title: 'Dashboard', domain: 'Web Development', image: web2 },
        { id: 3, title: 'Restaurant Website', domain: 'Web Development', image: web3},
        { id: 4, title: 'Todo list', domain: 'Web Development', image: web4},
        // { id: 5, title: 'Facebook UI', domain: 'App Development', image: fluter2, },
        // { id: 6, title: 'Proporeal App', domain: 'App Development', image: fluter3 },
        // { id: 7, title: 'Nayapay UI Design', domain: 'App Development', image: fluter4 },
        { id: 5, title: 'Mud Mask', domain: 'Digital Marketing', image: marketer1},
        { id: 6, title: 'DR. D3', domain: 'Digital Marketing', image: marketer2 },
        { id: 7, title: 'Hair Oil', domain: 'Digital Marketing', image: marketer3},
        { id: 8, title: 'Yoga Pants', domain: 'Graphic Designing', image: design2 },
        { id: 9, title: 'Style Hive', domain: 'Graphic Designing', image: design3 },
        { id: 10, title: 'Black Friday', domain: 'Graphic Designing', image: design4},
    ];

    const categories = ['All', 'Web Development', 'Digital Marketing', 'Graphic Designing'];

    const filteredProjects = selectedCategory === 'All'
        ? project
        : project.filter(project => project.domain === selectedCategory);

    return (
        <div id="portfolio" className="px-20 py-20 text-center">
            <h2
                className="mb-10 text-2xl sm:text-3xl md:text-4xl font-semibold text-white relative inline-block 
    after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:w-28 sm:after:w-20 md:after:w-35 
    after:h-1 after:bg-[#114B9F] after:rounded-lg after:-translate-x-1/2"
            >
                Portfolio
            </h2>

            {/* Category Buttons */}
            <div className="flex justify-center flex-wrap gap-4 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 rounded-full text-white cursor-pointer ${selectedCategory === category ? 'bg-[#114B9F]' : 'bg-gray-400'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="rounded-lg shadow-lg overflow-hidden border-2"
                        style={{
                            borderColor: "#114B9F",
                            background: "linear-gradient(to bottom, #114B9F, black)"
                        }}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-34 object-cover rounded-t-lg cursor-pointer"
                            onClick={() => {
                                setCurrentImage(project.image);
                                setIsModalOpen(true);
                            }}
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold">{project.title}</h2>
                            <p className="text-sm text-gray-500 mb-2">{project.domain}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Enlarged Image */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <img
                        src={currentImage}
                        alt="Enlarged Project"
                        className="max-w-[90%] max-h-[90%] rounded-lg"
                    />
                </div>
            )}
        </div>
    );
};

export default Portfolio;
