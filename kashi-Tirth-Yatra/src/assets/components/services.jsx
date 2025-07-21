import React from "react";
import arrow from '/services/arrow.png'
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';

const servicesData = [
    { icon: "/services/ser1.png", title: "Accommodation" },
    { icon: "/services/ser2.png", title: "Guided Tours" },
    { icon: "/services/ser3.png", title: "Food arrangements" },
    { icon: "/services/ser4.png", title: "Temple Visits" },
    { icon: "/services/ser5.png", title: "Shopping" },
    { icon: "/services/ser6.png", title: "Photoshoots" }
];

const Services = () => {
    return (
        <section className="text-center py-5 bg-white">
            <h3 className="fw-bold fs-2 py-2 mx-5 my-0">Travel Company in Banaras</h3>

            {/* Heading and Arrow */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="row d-flex flex-row justify-content-center align-items-center gap-4 mx-5 my-0 py-3"
            >
                <h4 className="fw-bold fs-2 my-0">Our Services</h4>
                <img
                    src={arrow}
                    alt="decorative divider"
                    className="my-1"
                    style={{ height: ".7rem", width: "auto" }}
                />
            </motion.div>

            {/* Services Grid */}
            <div className="container">
                <div className="row g-4">
                    {servicesData.map((service, index) => (
                        <div className="col-12 col-sm-6 col-lg-4" key={index}>
                            <motion.div
                                className="py-5 shadow-sm rounded-4 h-100 hover-effect text-center cursor-pointer"
                                style={{ cursor: "pointer" }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="icon mb-3"
                                    style={{ height: "100px" }}
                                />
                                <h6 className="fw-semibold fs-5 mb-2">{service.title}</h6>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;