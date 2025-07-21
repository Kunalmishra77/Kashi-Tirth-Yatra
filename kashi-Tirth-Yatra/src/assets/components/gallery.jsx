import React, { useState } from "react";
import { motion } from "framer-motion";

const GallerySection = ({ title, galleryTitle, tabs, images }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const sectionVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.3, // delay each image based on index
                duration: 0.4,
                ease: "easeOut"
            }
        }),
    };

    return (
        <motion.section
            className="gallery-section container-fluid py-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <h2 className="text-center fw-bold mb-5">{title}</h2>

            <div className="gallery-box mx-auto p-4">
                <div className="d-flex flex-column mb-4">
                    <h3 className="text-white fw-bold gallery-title text-center">{galleryTitle}</h3>
                    <div className="text-center">
                        <img
                            src="/services/leftarrow.png"
                            alt="underline"
                            style={{ height: "10px", maxWidth: "150px" }}
                        />
                    </div>
                </div>

                <div className="tabs d-flex justify-content-center gap-4 flex-wrap mb-4">
                    {tabs.map((tab) => (
                        <span
                            key={tab}
                            className={`tab ${activeTab === tab ? "active-tab" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </span>
                    ))}
                </div>

                <div className="row gx-3 px-5">
                    {images[activeTab]?.map((img, idx) => (
                        <motion.div
                            key={idx}
                            className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3"
                            variants={imageVariants}
                            initial="hidden"
                            animate="visible"
                            custom={idx}
                        >
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                src={img}
                                alt={`Gallery ${idx}`}
                                className="gallery-img"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default GallerySection;
