import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '/images/logo@2x.png';
import flogo from '/images/logo.webp';
import './index.css';
import './App.css'
import Header from './assets/components/header'
import Slider from './assets/components/slider';
import Services from './assets/components/services';
import InfoSection from './assets/components/infosection';
import HeroSection from './assets/components/contect';
import GallerySection from './assets/components/gallery';
import Footer from './assets/components/footer';

const slides = [
  {
    image: "/images/slide1.png",
    title: "Welcome to Varanasi",
    desc: "Explore the spiritual city on the banks of Ganga.",
    btnTxt: "Book Your Yatra Now",
  },
  {
    image: "/images/slide2.jpg",
    title: "Experience Ganga Aarti",
    desc: "Witness the mesmerizing Ganga Aarti every evening.",
    btnTxt: "Book Your Yatra Now",
  },
  {
    image: "/images/slide3.jpg",
    title: "Sacred Rituals",
    desc: "Feel the energy of devotion and faith.",
    btnTxt: "Book Your Yatra Now",
  },
  {
    image: "/images/slide4.jpg",
    title: "Sacred Rituals",
    desc: "Feel the energy of devotion and faith.",
    btnTxt: "Book Your Yatra Now",
  }
];

const sections = [
  {
    title: "About Us",
    icon: '/services/leftarrow.png',
    subtitle: "Travel Company In Banaras",
    description: "At Kashi Tirth Yatra, our mission is to provide an unparalleled spiritual journey through one of the world's oldest and most revered holy cities, Kashi.",
    extraContent: "We guide pilgrims with devotion and professionalism for a once-in-a-lifetime experience in Varanasi.",
    image: "/services/img2.webp",
    isImageLeft: false
  },
  {
    title: "Our Vision",
    icon: '/services/leftarrow.png',
    subtitle: "Travel Company In Banaras",
    description: "To be the leading facilitator of soul-touching pilgrimage experiences in Kashi, offering services that foster a deep connection between the divine and those who seek it.",
    extraContent: "We guide pilgrims with devotion and professionalism for a once-in-a-lifetime experience in Varanasi.",
    image: "/services/img1.webp",
    isImageLeft: true
  }
]

const App = () => {

  return (
    <>
      <div className="position-relative">
        <Header logo={logo} />
        <Slider slides={slides} />
      </div>
      <Services />
      <div className="abt-sec container-fluid">
        {sections.map((section, i) => (
          <InfoSection
            key={i} {...section}
          />
        ))}
      </div>
      <HeroSection
        heading="Travel Agency in"
        subheading="Get Customise Tour Packages"
      />
      <GallerySection
        title="Explore Kashi with best travel company in Banaras"
        galleryTitle="Gallery"
        tabs={["Temple Visits", "Shopping", "Photoshoots", "Accommodation"]}
        images={{
          "Temple Visits": [
            "/gallery/img7.webp",
            "/gallery/img2.webp",
            "/gallery/img3.webp",
            "/gallery/img4.webp",
            "/gallery/img1.webp",
            "/gallery/img6.webp",
            "/gallery/img8.webp",
          ],
          Shopping: [
            "/gallery/img2.webp",
            "/gallery/img1.webp",
            "/gallery/img3.webp",
          ],
          Photoshoots: [
            "/gallery/img9.jpg",
            "/gallery/img10.jpg",
            "/gallery/img5.webp"

          ],
          Accommodation: [
            "/gallery/img5.webp",
            "/gallery/img6.webp",
            "/gallery/img10.jpg",
            "/gallery/img8.webp",
          ],
        }}
      />
      <Footer logo={flogo} companyName="Kashi Tirth Yatra" />
    </>
  )
}

export default App
