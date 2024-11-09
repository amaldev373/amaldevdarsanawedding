import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"; // Ensure this package is installed
import Masonry from "./Masonry";

const ImageGallery = ({galleryRef}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const paragraphVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="sm:mt-10 lg:mt-28"
      initial="hidden"
      animate={controls}
      style={{ overflowX: "hidden" }} // Prevent horizontal scroll due to initial animation state
    >
      <div ref={galleryRef} className="mainImgDiv max-w-7xl mx-auto sm:px-2 lg:px-0 flex flex-col items-center">
        <div className="imgTextContainer flex sm:flex-col lg:flex-row w-full items-center sm:justify-center">
          <motion.div
            className="imgTitleContainer text-6xl font-greatVibes text-gradient p-2"
            variants={titleVariants}
          >
            ImageGallery
          </motion.div>
          <motion.div
            className="imgIntroParaDiv sm:text-2xl lg:text-3xl font-dancingScript text-justify text-graylight sm:p-2 lg:pl-32 py-5"
            variants={paragraphVariants}
          >
            Welcome to our "imageCollection". We're excited to share some
            cherished moments with you. We hope these images fill you with as much joy as
            they do us.
          </motion.div>
        </div>
        <Masonry/>

      </div>
    </motion.section>
  );
};

export default ImageGallery;
