import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = ({ logo }) => {

    return (
        <nav className="navbar navbar-expand-lg position-absolute w-100 z-3 custom-navbar">
            <div className="cont container-fluid">
                {/* Logo */}
                <a className="logo navbar-brand " href="#">
                    <img src={logo} alt="Logo" className="img-fluid logo-img" />
                </a>

                {/* Toggler */}
                <button
                    className="navbar-toggler custom-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">
                        <div></div> {/* Middle line */}
                    </span>
                </button>


                {/* Nav Links */}
                <div className="collapse navbar-collapse justify-content-end pe-5" id="navbarNav">
                    <ul className="navbar-nav text-end">
                        <li className="nav-item px-2">
                            <a className="nav-link active" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#">
                                Packages
                            </a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#">
                                Our Services
                            </a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#">
                                Gallery
                            </a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#">
                                About Us
                            </a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#">
                                Contact Us
                            </a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#">
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;
