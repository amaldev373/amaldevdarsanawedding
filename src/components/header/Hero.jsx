import React from "react";
import { motion } from "framer-motion";
import CardSwipe from "./CardSwipe";
const Hero = ({heroRef}) => {
  return (
    <section ref={heroRef} className="mt-[80px] w-full overflow-hidden sm:pt-10 sm:pb-10 lg:pt-40 lg:pb-20">
      <div
        className={`main-conainer flex sm:flex-col lg:flex-row  bg-white text-black
      sm:p-0 md:px-20 xl:px:20  lg:px-2  lg:gap-3`}
      >
        <div
          className="herotextContainer flex sm:basis-3/5  lg:basis-3/5 sm:order-2 lg:order-1  
        sm:justify-center lg:justify-center lg:items-center sm:pt-10 lg:p-0"
        >
          <div className="flex flex-col  items-center xl:ml-[100px] lg:ml-0">
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 30,}}
            >
             
            </motion.div>
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 20, }}
            >
              <span>
                <p className="text-xl md:text-2xl lg:3xl font-playwriteCuba">
                 3rd & 10th November 2024
                </p>
              </span>
            </motion.div>
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 20,  }}
            >
              <span>
                <p className=" p-2   border-r-white sm:text-5xl lg:text-7xl font-greatVibes">
                  Save The Dates
                </p>
              </span>
            </motion.div>
          </div>
        </div>
        <div className="heroImageContainer relative flex sm:basis-2/5 lg:basis-2/5 sm:order-1 lg:order-2 items-center sm:pt-10 sm:px-3 lg:p-0 sm:justify-center lg:justify-normal">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{  duration:2, }}
          >
            <CardSwipe/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
