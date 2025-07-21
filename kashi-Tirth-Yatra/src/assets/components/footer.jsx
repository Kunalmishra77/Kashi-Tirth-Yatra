import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaArrowUp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import footerData from "./footerData";
import { FaComments } from "react-icons/fa";

const Footer = ({ logo, companyName }) => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            setShowScroll(window.scrollY > 300);
        };
        window.addEventListener("scroll", checkScrollTop);
        return () => window.removeEventListener("scroll", checkScrollTop);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.footer
            className="footer-container text-light pd-2 pt-5"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container my-3">
                <div className="footer-grid">
                    {/* Column 1 */}
                    <div className="footer-col p-2">
                        <img src={logo} alt="Logo" className="footer-logo mb-3" />
                        <p>{footerData.description}</p>
                        <div className="footer-social d-flex gap-3">
                            {footerData.social.map((icon, i) => (
                                <a key={i} href={icon.link} target="_blank" rel="noreferrer">{icon.icon}</a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="footer-col p-2">
                        <h4 className="mb-4">Company</h4>
                        <ul className="list-unstyled">
                            {footerData.company.map((item, i) => (
                                <li key={i}><a href={item.link}>{item.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="footer-col p-2">
                        <h4 className="mb-4">Quick Links</h4>
                        <ul className="list-unstyled">
                            {footerData.quickLinks.map((item, i) => (
                                <li key={i}><a href={item.link}>{item.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="footer-col p-2">
                        <h4 className="mb-4">Contact</h4>
                        <ul className="list-unstyled contact-list">
                            <li className="mb-1"><FaPhoneAlt /> {footerData.contact.phone1}</li>
                            <li className="mb-1"><FaPhoneAlt /> {footerData.contact.phone2}</li>
                            <li className="mb-1"><FaEnvelope /> {footerData.contact.email}</li>
                            <li className="mb-1"><FaMapMarkerAlt /> {footerData.contact.address}</li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* Bottom Footer */}
            <div className="footer-bottom py-4 px-0  text-center d-flex justify-content-between align-items-center container">
                <small className="py-2">© 2023 {companyName}. All Rights Reserved</small>
                <div>
                    <a href="/terms" className="text-light mx-1">Terms & Conditions |</a>
                    <a href="/privacy" className="text-light">Privacy Policy</a>
                </div>
            </div>

            {/* Scroll to top */}
            {showScroll && (
                <motion.button
                    className="scrollTopBtn"
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaArrowUp />
                </motion.button>
            )}

            <motion.div
                className="floating-contact-wrapper d-flex align-items-center"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Icon Circle */}
                <div className="contact-icon-circle d-flex justify-content-center align-items-center">
                    <FaComments size={18} color="white" />
                </div>

                {/* Pill Button */}
                <a
                    href="/contact"
                    className="contact-pill text-dark text-decoration-none d-flex align-items-center ps-3 pe-4"
                >
                    Contact Us
                </a>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;
