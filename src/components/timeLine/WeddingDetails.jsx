import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaMapLocation } from "react-icons/fa6";

const WeddingDetails = ({ timeLineRef }) => {
  const engageUrl =
    "https://www.google.com/maps/place/St.+George+Syro-Malabar+Church/@10.102177,76.27637,16z/data=!4m6!3m5!1s0x3b080e2b64dc93a1:0x154f48a305454d22!8m2!3d10.1021769!4d76.2763703!16s%2Fg%2F1vvdsn6g?hl=en&entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
  const recpUrl =
    "https://www.google.com/maps/place/Kbees+Durbar+convention+centre/@10.226715,76.205518,16z/data=!4m6!3m5!1s0x3b081b8c145507b1:0xe1f143c6fa7d91cf!8m2!3d10.2267148!4d76.2055182!16s%2Fg%2F11cm120y2r?hl=en&entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D";
  const weddingDate = new Date("2024-11-10T11:30:00").getTime();
  const [timeLeftWedding, setTimeLeftWedding] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const engagementDate = new Date("2024-11-03T11:30:00").getTime();
  const [timeLeftEngagement, setTimeLeftEngagement] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownWeddingInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = weddingDate - now;

      if (timeRemaining < 0) {
        setTimeLeftWedding({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
        setTimeLeftWedding({ days, hours, minutes, seconds });
      }
    }, 1000);

    const countdownEngagementInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = engagementDate - now;

      if (timeRemaining < 0) {
        setTimeLeftWedding({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(countdownEngagementInterval);
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        setTimeLeftEngagement({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => {
      clearInterval(countdownWeddingInterval);
      clearInterval(countdownEngagementInterval);
    };
  }, [weddingDate, engagementDate]);

  return (
    <section ref={timeLineRef} className="sm:pt-7 lg:pt-20 overflow-hidden">
      <div className="mainImgDiv max-w-7xl mx-auto sm:px-2 lg:px-0 flex flex-col items-center">
        <div className="imgTextContainer flex sm:flex-col  w-full items-center sm:justify-center">
          <motion.div
            initial={{ x: 250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 20 }}
            className="imgTitleContainer text-5xl font-greatVibes text-gradient p-2"
          >
            Engagement
          </motion.div>
          <motion.div
            initial={{ x: -250, scale: 2, opacity: 0 }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 20 }}
            className="imgIntroParaDiv sm:text-2xl lg:text-3xl font-dancingScript text-justify text-graylight sm:p-2  py-5"
          >
            The engagement ceremony will be a traditional ring exchange event,
            held in the presence of close family and friends. The couple will
            exchange rings, symbolizing their love and commitment, and marking
            the formalization of their engagement. Surrounded by warm wishes and
            blessings, this special moment will set the stage for their journey
            together as they prepare for their wedding.
          </motion.div>
          <div className="MapMainDiv w-full justify-between flex sm:flex-col lg:flex-row sm:pt-3 ">
            <div className="textContainerDiv flex flex-col sm:gap-5 lg:gap-10">
              <span className="sm:text-3xl lg:text-3xl font-semibold text-center">
                St. George Syro-Malabar Church Hall
              </span>
              <span className="flex flex-col ">
                <span className="date flex flex-row p-1 gap-2 items-center sm:text-xl lg:text-2xl font-normal">
                  <FaCalendarAlt size={25} />
                  November 3rd 2024
                </span>
                <span className="time pl-10 text-lg">11:00 am</span>
              </span>
              <span className="flex flex-col">
                <span className="ExactLocation flex flex-row p-1 gap-2 items-center sm:text-lg lg:text-2xl font-normal">
                  <FaLocationDot size={25} />Koonammavu - Panayikulam
                  Rd, Kongorppilly
                </span>
                <span className="phoneHeading pl-10">Event Address</span>
              </span>
              <span className="flex flex-col">
                <span className="phoneNumber flex flex-row p-1 gap-2 items-center sm:text-lg lg:text-2xl font-normal">
                  <FaPhoneAlt size={25} /> +91 98478 90365
                </span>
                <span className="phoneHeading pl-10">Phone Number</span>
              </span>
            </div>
            <div className="mapContainer sm:p-2 lg:p-0 sm:mt-5 lg:mt-0 ">
              <div className="flex flex-col w-full h-full">
                <div className="font-black sm:text-xl lg:text-2xl flex w-full justify-end ">
                  <button
                    onClick={() => window.open(engageUrl, "_blank")}
                    className="bg-white border border-black  hover:bg-gray-light transition-colors duration-300 text-black font-bold py-2 px-4 hover:shadow-lg rounded-xl inline-flex items-center"
                  >
                    <FaMapLocation className="text-blue w-6 h-6 mr-2" />
                    <span className="text-darkblue">Open Map</span>
                  </button>
                </div>
                <div className="sm:hidden lg:block lg:pt-5">
                  <iframe
                    className="rounded-lg flex sm:w-full h-[300px] lg:w-[650px] lg:h-[450px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.962237318041!2d76.2763703!3d10.1021769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080e2b64dc93a1%3A0x154f48a305454d22!2sSt.%20George%20Syro-Malabar%20Church!5e0!3m2!1sen!2sin!4v1729434392978!5m2!1sen!2sin"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          {/* Countdown */}
          <div className="bg-cover text-black px-2">
            <motion.div
              className="mt-12 backdrop:blur-3xl"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, stiffness: 30, delay: 0.2 }}
            >
              <div className="sm:text-3xl lg:text-5xl text-center  font-dancingScript mb-6 backdrop-blur">
                Don't Miss the Day !
              </div>
              <div className="flex justify-center sm:text-xl lg:gap-10 lg:text-5xl font-dancingScript space-x-8 text-">
                <div className="flex flex-col gap-3">
                  <div className=" ">{timeLeftEngagement.days}</div>
                  <div className=" font-Playfiar text-2xl">Days</div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="  ">{timeLeftEngagement.hours}</div>
                  <div className=" font-Playfiar text-2xl">Hours</div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className=" ">{timeLeftEngagement.minutes}</div>
                  <div className=" font-Playfiar text-2xl">Mins</div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className=" te">{timeLeftEngagement.seconds}</div>
                  <div className=" font-Playfiar text-2xl">Secs</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="imgTextContainer sm:pt-7 lg:pt-20  flex sm:flex-col  w-full items-center sm:justify-center">
          <motion.div
            initial={{ x: 250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 20 }}
            className="imgTitleContainer text-5xl font-greatVibes text-gradient p-2"
          >
            Wedding
          </motion.div>
          <motion.div
            initial={{ y: 250, scale: 2, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 20 }}
            className="imgIntroParaDiv sm:text-2xl lg:text-3xl font-dancingScript text-justify text-graylight sm:p-2  py-5"
          >
            The wedding will be a beautiful evening ceremony, celebrated in the
            presence of family and friends. As they tie the knot, their love and
            commitment to one another will mark the beginning of their life
            together. Surrounded by the warm glow of the evening, this cherished
            moment will be filled with blessings, joy, and the heartfelt support
            of their loved ones. The evening celebration will culminate in a
            joyous union, setting the perfect tone for their new journey as
            husband and wife.
          </motion.div>
          <div className="MapMainDiv w-full justify-between flex sm:flex-col lg:flex-row sm:pt-2">
            <div className="textContainerDiv flex flex-col sm:gap-5 lg:gap-10">
              <span className="sm:text-3xl lg:text-3xl font-semibold text-center">
                Kbees Durbar convention centre
              </span>
              <span className="flex flex-col ">
                <span className="date flex flex-row p-1 gap-2 items-center sm:text-xl lg:text-2xl font-normal">
                  <FaCalendarAlt size={25} />
                  10th November 2024
                </span>
                <span className="time pl-10 text-lg">05:00 pm - 08:00 pm</span>
              </span>
              <span className="flex flex-col">
                <span className="ExactLocation flex flex-row p-1 gap-2 items-center sm:text-lg lg:text-2xl font-normal">
                  <FaLocationDot size={25} /> Near Pullut Bridge, Kodungallur
                </span>
                <span className="phoneHeading pl-10">Event Address</span>
              </span>
              <span className="flex flex-col">
                <span className="phoneNumber flex flex-row p-1 gap-2 items-center sm:text-lg lg:text-2xl font-normal">
                  <FaPhoneAlt size={25} /> +91 99955 70060
                </span>
                <span className="phoneHeading pl-10">Phone Number</span>
              </span>
            </div>
            <div className="mapContainer sm:p-2 lg:p-0 sm:mt-5 lg:mt-0 ">
              <div className="flex flex-col w-full h-full">
                <div className="font-black sm:text-xl lg:text-2xl flex w-full justify-end lg">
                  <button
                    onClick={() => window.open(recpUrl, "_blank")}
                    className="bg-white border border-black  hover:bg-gray-light transition-colors duration-300 text-black font-bold py-2 px-4 hover:shadow-lg rounded-xl inline-flex items-center"
                  >
                    <FaMapLocation className="text-blue w-6 h-6 mr-2" />
                    <span className="text-darkblue">Open Map</span>
                  </button>
                </div>
                <div className="sm:hidden lg:block lg:pt-5">
                  <iframe
                    className="rounded-lg flex sm:w-full h-[300px] lg:w-[650px] lg:h-[450px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.4318103416194!2d76.2055182!3d10.2267148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081b8c145507b1%3A0xe1f143c6fa7d91cf!2sKbees%20Durbar%20convention%20centre!5e0!3m2!1sen!2sin!4v1729433142101!5m2!1sen!2sin"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Countdown */}
        <div className="bg-cover text-black px-2">
          <motion.div
            className="mt-12 backdrop:blur-3xl"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, stiffness: 30, delay: 0.2 }}
          >
            <div className="sm:text-3xl lg:text-5xl text-center  font-dancingScript mb-6 backdrop-blur">
              Don't Miss the Day !
            </div>
            <div className="flex justify-center sm:text-xl lg:gap-10 lg:text-5xl font-dancingScript space-x-8 text-">
              <div className="flex flex-col gap-3">
                <div className=" ">{timeLeftWedding.days}</div>
                <div className=" font-Playfiar text-2xl">Days</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="  ">{timeLeftWedding.hours}</div>
                <div className=" font-Playfiar text-2xl">Hours</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className=" ">{timeLeftWedding.minutes}</div>
                <div className=" font-Playfiar text-2xl">Mins</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className=" te">{timeLeftWedding.seconds}</div>
                <div className=" font-Playfiar text-2xl">Secs</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
