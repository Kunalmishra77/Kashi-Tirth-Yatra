import React, { useState } from "react";
import { motion } from "framer-motion";

const InfoSection = ({ title, subtitle, description, image, isImageLeft, icon, extraContent }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => setShowMore(!showMore);

  return (
    <div className="abt-row row align-items-center flex-md-row-reverse my-5">
      {/* Image on Left (Conditional) */}
      {isImageLeft && (
        <motion.div
          className="col-md-6 mb-4 mb-md-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={image} className="img-fluid rounded" alt="Section" />
        </motion.div>
      )}

      {/* Text Content */}
      <motion.div
        className="col-md-6"
        initial={{ x: isImageLeft ? 100 : -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="fw-bold">{title}</h2>
        <img src={icon} alt={title} className="img-fluid" style={{ height: '12px' }} />
        <h5 className="fw-bold my-0 fs-5 mb-2 pt-3">{subtitle}</h5>
        <p className="lh-base fw-semibold">{description}</p>

        {/* Extra Content (Toggle) */}
        {showMore && (
          <motion.p
            className="lh-base fw-semibold mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {extraContent}
          </motion.p>
        )}

        {/* Read More Button */}
        <motion.button
          className="btn btn-sm mt-3"
          onClick={handleToggle}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: "#f08b1b",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "5px",
          }}
        >
          {showMore ? "Read Less" : "Read More"}
        </motion.button>
      </motion.div>

      {/* Image on Right (Conditional) */}
      {!isImageLeft && (
        <motion.div
          className="col-md-6 mt-4 mt-md-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={image} className="img-fluid rounded d-block mx-auto" alt="Section" />
        </motion.div>
      )}
    </div>
  );
};

export default InfoSection;
