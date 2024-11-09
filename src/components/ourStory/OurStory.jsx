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
            className="sm:text-5xl lg:text-7xl font-greatVibes text-gradient py-2 text-darkblue mb-4 "
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
          className=" sm:text-2xl md:text-3xl lg:text-4xl text-graylight text-justify sm:px-1 font-dancingScript mb-8 tracking-wide"
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 30, delay: 0.5 }}
        >
          We are beyond excited to celebrate our love and joy with all of you!
          As we take the next step in our journey together, we invite you to
          join us for two very special occasions – our engagement and wedding.
        </motion.p>

        <motion.p
          // Track visibility for the second paragraph
          className="sm:text-2xl md:text-3xl lg:text-4xl text-graylight text-justify sm:px-1 font-dancingScript mb-8 tracking-wide"
          initial={{ x: 250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 30, delay: 0.8 }}
        >
          Please save the dates, explore the details so that we can create
          beautiful memories together. Thank you for your love, support, and
          presence in our lives. We can’t wait to see you!
        </motion.p>
      </div>
    </section>
  );
};

export default OurStory;
