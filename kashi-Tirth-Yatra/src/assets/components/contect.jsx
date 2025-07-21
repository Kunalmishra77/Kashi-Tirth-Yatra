import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = ({ heading, subheading }) => {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        console.log("Form Data Changed");
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("✅ Enquiry submitted successfully!");
        setFormData({ name: "", number: "", email: "", message: "" });
    };

    return (
        <section className="container-fluid py-5 d-flex justify-content-center">
            <div className="hero-wrapper p-3 p-md-5">
                <img
                    src="/images/slide4.jpg"
                    alt="hero"
                    className="hero-image"
                />

                <div className="cont-sec row align-items-center g-4">
                    <motion.div
                        className="col-12 col-lg-7 text-white"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="fw-bold display-5">{heading} <br /> <span className="text-vns">Varanasi</span></h1>
                        <p className="lead mt-3">{subheading}</p>
                    </motion.div>

                    <motion.div
                        className="col-12 col-lg-5 p-4  hero-form shadow"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h5 className="text-white mb-3 ">
                            Compare quotes from up to 3 travel agents
                        </h5>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Type Your Name"
                                className="form-control mb-3 transparent-input"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="number"
                                placeholder="Type Your Number"
                                className="form-control mb-3 transparent-input"
                                value={formData.number}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Type Your Email"
                                className="form-control mb-3 transparent-input"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                rows="2"
                                placeholder="Type Your Message"
                                className="form-control mb-3 transparent-input"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <button type="submit" className="btn hero-button w-100">
                                Get Free Quotes
                            </button>
                        </form>
                        <small className="text-white d-block mt-2">
                            *By submitting this enquiry, I agree to the Terms of Service.
                        </small>
                    </motion.div>
                </div>
            </div>
            <ToastContainer position="top-right" theme="colored" />
        </section>
    );
};

export default HeroSection;
