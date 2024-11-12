import React from "react";
import { motion } from "framer-motion";
const OurStory = ({ storiesRef }) => {
  return (
    <section className="bg-white text-dark sm:pt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 lg:px-0 text-center">
        <div
          ref={storiesRef}
          className="heading-container flex flex-col items-center justify-center"
        >
          <motion.h2
            className="sm:text-4xl lg:text-5xl font-Poppins text-blue py-2 mb-4 "
            initial={{ y: 250, scale: 2, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 20 }}
            exit={{ y: 0, opacity: 1 }}
          >
            Welcome to Our New Journey !
          </motion.h2>
        </div>
        <motion.p
          // This will be tracked for visibility
          className=" sm:text-3xl md:text-4xl lg:text-4xl text-graylight text-justify sm:px-1 font-greatVibes mb-8 tracking-wide"
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 30, delay: 0.5 }}
        >
          We are beyond excited to celebrate our love and joy with all of you!
          As we take the next step in our journey together, we invite you to
          join us for on our special occasion – our Wedding.
        </motion.p>

        <motion.p
          // Track visibility for the second paragraph
          className="sm:text-3xl md:text-4xl lg:text-4xl text-graylight text-justify sm:px-1 font-greatVibes mb-8 tracking-wide"
          initial={{ x: 250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 30, delay: 0.8 }}
        >
          Please save the date, explore the details so that we can create
          beautiful memories together. Thank you for your love, support, and
          presence in our lives.
        </motion.p>
      </div>
    </section>
  );
};

export default OurStory;
