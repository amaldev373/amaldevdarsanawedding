import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import pinkFlower from "../../assets/flowerPink.png";
const Thanks = () => {
  const weddingDate = new Date("2024-11-10T11:30:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = weddingDate - now;

      if (timeRemaining < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(countdownInterval);
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [weddingDate]);

  return (
    <section className="bg-white text-dark sm:pt-28 lg:pt-60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 lg:px-0 text-center">
        <div className="heading-container flex flex-col items-center justify-center">
          <motion.h2
            className="sm:text-5xl lg:text-7xl font-dancingScript text-darkblue mb-4 "
            initial={{ x: 250,  opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 20 }}
            exit={{ y: 0, opacity: 1 }}
          >
            Special Thanks
            <div className="flex items-center  md:w-96">
              <div className="flex-grow border-t border-black"></div>
              <img src={pinkFlower} alt="" className="sm:w-8 md:w-12" />
              <div className="flex-grow border-t border-black"></div>
            </div>
          </motion.h2>
        </div>
        <motion.div
          // This will be tracked for visibility
          className=" sm:text-2xl md:text-3xl lg:text-4xl text-graylight text-justify sm:px-1 font-dancingScript mb-8 tracking-wide"
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 30, delay: 0.5 }}
        >
          As we prepare for our special day, we want to express our heartfelt
          thanks to all of you for your love, support, and encouragement. Your
          presence, whether near or far, means everything to us. We are excited
          to celebrate this milestone in our lives with you, and we are truly
          grateful for your well-wishes and blessings
          <div className="w-full flex ">
            <span className="flex flex-col sm:pt-4 lg:pt-7 text-black font-greatVibes">
              <span>With love and gratitude,</span>
              <span>Dibin & Aji</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Thanks;
