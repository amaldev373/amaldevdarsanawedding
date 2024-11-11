import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaMapLocation } from "react-icons/fa6";

const WeddingDetails = ({ timeLineRef }) => {
  const engageUrl =
    "https://www.google.com/maps/place/Perumpadappu+Sri+Subramanya+Temple/@9.905668,76.280532,2616m/data=!3m1!1e3!4m6!3m5!1s0x3b08720d0fe4254d:0x949e8db849feb3d0!8m2!3d9.9056683!4d76.2805321!16s%2Fg%2F1tf9r7sn?hl=en&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D";
  const recpUrl =
    "https://www.google.com/maps/place/ZION+Parish+Hall/@10.166976,76.353774,2614m/data=!3m1!1e3!4m6!3m5!1s0x3b0805e5d7cd716f:0x2655a0a7f3ee7879!8m2!3d10.1669756!4d76.3537738!16s%2Fg%2F11c1m7l_dw?hl=en&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D";

  const feastUrl =
    "https://www.google.com/maps/place/VK+karthikeyan+hall/@9.908074,76.274901,10464m/data=!3m1!1e3!4m6!3m5!1s0x3b0873a982b731af:0x53a2d56678964d68!8m2!3d9.9080743!4d76.2749011!16s%2Fg%2F11gk3vqrqc?hl=en&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D";
  const weddingDate = new Date("2024-11-17T18:00:00").getTime();
  const [timeLeftWedding, setTimeLeftWedding] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const engagementDate = new Date("2024-11-17T09:30:00").getTime();
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
            className="imgTitleContainer text-4xl font-Poppins text-blue p-2"
          >
            Thaalikettu
          </motion.div>
          <motion.div
            initial={{ x: -250, scale: 2, opacity: 0 }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 20 }}
            className="imgIntroParaDiv sm:text-3xl lg:text-4xl font-greatVibes text-justify text-graylight sm:p-2  py-5"
          >
            We joyfully invite you to witness the cherished moment of
            Thaalikettu in our wedding ceremony, a poignant symbol of our
            eternal bond. This sacred tradition,, marks the beginning of our
            lifelong journey together. Set against a backdrop of traditional
            music and familial blessings, this ritual underscores our commitment
            and love. Join us as we unite in this beautiful celebration of unity
            and affection.
          </motion.div>
          <div className="MapMainDiv w-full justify-between flex sm:flex-col lg:flex-row sm:pt-3 ">
            <div className="textContainerDiv flex flex-col sm:gap-5 lg:gap-10">
              <span className="sm:text-3xl lg:text-3xl font-semibold text-center">
                Perumpadappu Subramanya Temple (kettu)
              </span>
              <span className="flex flex-col ">
                <span className="date flex flex-row p-1 gap-2 items-center sm:text-xl lg:text-2xl font-normal">
                  <FaCalendarAlt size={25} />
                  November 17th 2024
                </span>
                <span className="time pl-10 text-lg">09:30 am - 11:30 am</span>
              </span>
              <span className="flex flex-col">
                <span className="ExactLocation flex flex-row p-1 gap-2 items-center sm:text-lg lg:text-2xl font-normal">
                  <FaLocationDot size={25} />
                  Palluruthy, Perumpadappu, Kochi
                </span>
                <span className="phoneHeading pl-10">Event Address</span>
              </span>
              <span className="flex flex-col">
                <span className="phoneNumber flex flex-row p-1 gap-2 items-center sm:text-lg lg:text-2xl font-normal">
                  <FaPhoneAlt size={25} /> +91 9847500772
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.3393548538675!2d76.2805321!3d9.9056683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08720d0fe4254d%3A0x949e8db849feb3d0!2sPerumpadappu%20Sri%20Subramanya%20Temple!5e0!3m2!1sen!2sin!4v1731318271428!5m2!1sen!2sin"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="MapMainDiv w-full justify-between flex sm:flex-col lg:flex-row sm:pt-3 ">
            <div className="textContainerDiv flex flex-col sm:gap-5 lg:gap-10">
              <span className="sm:text-3xl lg:text-3xl font-semibold text-center">
                VK karthikeyan hall (feast)
              </span>
              <span className="flex flex-col ">
                <span className="date flex flex-row p-1 gap-2 items-center sm:text-xl lg:text-2xl font-normal">
                  <FaCalendarAlt size={25} />
                  November 17th 2024
                </span>
                <span className="time pl-10 text-lg">11:30 am</span>
              </span>
              <span className="flex flex-col">
                <span className="ExactLocation flex flex-row p-1 gap-2 items-center sm:text-lg lg:text-2xl font-normal">
                  <FaLocationDot size={25} />
                  Konam - Kollassery Rd, Palluruthy
                </span>
                <span className="phoneHeading pl-10">Event Address</span>
              </span>
              <span className="flex flex-col">
                <span className="phoneNumber flex flex-row p-1 gap-2 items-center sm:text-lg lg:text-2xl font-normal">
                  <FaPhoneAlt size={25} /> +91 9847500772
                </span>
                <span className="phoneHeading pl-10">Phone Number</span>
              </span>
            </div>
            <div className="mapContainer sm:p-2 lg:p-0 sm:mt-5 lg:mt-0 ">
              <div className="flex flex-col w-full h-full">
                <div className="font-black sm:text-xl lg:text-2xl flex w-full justify-end ">
                  <button
                    onClick={() => window.open(feastUrl, "_blank")}
                    className="bg-white border border-black  hover:bg-gray-light transition-colors duration-300 text-black font-bold py-2 px-4 hover:shadow-lg rounded-xl inline-flex items-center"
                  >
                    <FaMapLocation className="text-blue w-6 h-6 mr-2" />
                    <span className="text-darkblue">Open Map</span>
                  </button>
                </div>
                <div className="sm:hidden lg:block lg:pt-5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5736.8204474362!2d76.2749011!3d9.9080743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0873a982b731af%3A0x53a2d56678964d68!2sVK%20karthikeyan%20hall!5e1!3m2!1sen!2sin!4v1731346292992!5m2!1sen!2sin"
                    className="rounded-lg flex sm:w-full h-[300px] lg:w-[650px] lg:h-[450px]"
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
            className="imgTitleContainer text-4xl font-Poppins text-blue p-2"
          >
            Reception
          </motion.div>
          <motion.div
            initial={{ y: 250, scale: 2, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 20 }}
            className="imgIntroParaDiv sm:text-2xl lg:text-3xl font-dancingScript text-justify text-graylight sm:p-2  py-5"
          >
            We are delighted to extend this invitation to our wedding reception,
            a celebration of love and new beginnings. Join us for an evening
            filled with joy, laughter, and dancing as we start our new life
            together. The reception promises a wonderful blend of delicious
            food, delightful music, and heartwarming company. It's not just a
            party; it's the first page of our life together. We look forward to
            sharing this special occasion with you and creating memories that we
            will cherish forever.
          </motion.div>
          <div className="MapMainDiv w-full justify-between flex sm:flex-col lg:flex-row sm:pt-2">
            <div className="textContainerDiv flex flex-col sm:gap-5 lg:gap-10">
              <span className="sm:text-3xl lg:text-3xl font-semibold text-center">
                ZION Parish Hall
              </span>
              <span className="flex flex-col ">
                <span className="date flex flex-row p-1 gap-2 items-center sm:text-xl lg:text-2xl font-normal">
                  <FaCalendarAlt size={25} />
                  17th November 2024
                </span>
                <span className="time pl-10 text-lg">06:00 pm - 09:00 pm</span>
              </span>
              <span className="flex flex-col">
                <span className="ExactLocation flex flex-row p-1 gap-2 items-center sm:text-lg lg:text-2xl font-normal">
                  <FaLocationDot size={25} /> KarakkattuKunnu, Mekkad, Angamaly
                </span>
                <span className="phoneHeading pl-10">Event Address</span>
              </span>
              <span className="flex flex-col">
                <span className="phoneNumber flex flex-row p-1 gap-2 items-center sm:text-lg lg:text-2xl font-normal">
                  <FaPhoneAlt size={25} /> +91 9400905018
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.1682515565108!2d76.3537738!3d10.1669756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0805e5d7cd716f%3A0x2655a0a7f3ee7879!2sZION%20Parish%20Hall!5e0!3m2!1sen!2sin!4v1731319415121!5m2!1sen!2sin"
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
