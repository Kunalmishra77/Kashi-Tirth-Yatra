import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const footerData = {
  description: "Embark on a Journey of Spirituality and Discovery with Kashi Tirth Yatra",
  company: [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about" },
    { label: "Gallery", link: "/gallery" },
    { label: "Our Services", link: "/services" }
  ],
  quickLinks: [
    { label: "Testimonials", link: "/testimonials" },
    { label: "Blogs", link: "/blogs" },
    { label: "Contact Us", link: "/contact" },
    { label: "About Us", link: "/about" }
  ],
  contact: {
    phone1: "+91-7985853439",
    phone2: "+91-9140607444",
    email: "info@kashitirthyatra.in",
    address: "136, Imliyaghat Phulwariya, Fourlane Varanasi 221002"
  },
  social: [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaYoutube />, link: "https://youtube.com" }
  ]
};

export default footerData;
