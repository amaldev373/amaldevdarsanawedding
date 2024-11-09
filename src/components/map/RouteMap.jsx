import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaMapLocation } from "react-icons/fa6";
const venueUrl =
  "https://www.google.com/maps/place/St.+Thomas+Kottakkavu+Forane+Church,+North+Paravur/@10.150558,76.218166,5068m/data=!3m1!1e3!4m6!3m5!1s0x3b081a795d8f53c3:0xf569a361d42788ee!8m2!3d10.1505581!4d76.218166!16s%2Fm%2F012w4fc5?hl=en&entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D";
const homeUrl =
  "https://www.google.com/maps/place/10%C2%B009'21.8%22N+76%C2%B013'09.4%22E/@10.155949,76.219536,21z/data=!4m4!3m3!8m2!3d10.1560556!4d76.2192778?hl=en&entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D";
const RouteMap = ({ mapRef }) => {
  const [isHome, setIsHome] = useState(false);
  const [active, setActive] = useState("venu");

  return (
    <section ref={mapRef} className="mt-20">
      <div className="mainContainer max-w-7xl mx-auto lg:px-3 sm:px-2">
        <span className="sm:text-4xl lg:text-5xl  font-Playfiar text-center w-full flex justify-center sm:pb-5 lg:p-0">
          <span>Find Your Way to the Event</span>
        </span>
        <div className="btnMainDiv flex text-xl   pb-5 w-full ">
          <div className="btnDiv flex border-x-2 border-t-2 border-gray-light rounded-t-md overflow-hidden">
            <button
              className={`w-32  flex-1 sm:px-2 sm:py-1 lg:p-2 ${
                active === "venu" ? "bg-graylight " : "bg-white text-black"
              } hover:bg-graylight hover:text-black transition-colors duration-300`}
              onClick={() => {
                setActive("venu"), setIsHome(false);
              }}
            >
              Venue
            </button>
            <button
              className={`w-32 flex-1 sm:px-2 sm:py-1 lg:p-2 ${
                active === "home" ? "bg-graylight" : "bg-white text-black"
              } hover:bg-graylight hover:text-black transition-colors duration-300`}
              onClick={() => {
                setActive("home"), setIsHome(true);
              }}
            >
              Home
            </button>
          </div>
          <div className="borderDiv flex w-full border-b-2 border-gray-light"></div>
        </div>
        {isHome ? (
          <div className="MapMainDiv flex sm:flex-col lg:flex-row lg:justify-between">
            <div className="textContainerDiv flex flex-col sm:gap-5 lg:gap-10">
              <span className="sm:text-2xl lg:text-3xl font-semibold text-center">
                Manapurath House
              </span>
              <span className="flex flex-col ">
                <span className="date flex flex-row p-1 gap-2 items-center sm:text-xl lg:text-2xl font-normal">
                  <FaCalendarAlt size={25} />
                  08 November - 10 November 2024
                </span>
                <span className="time pl-10 text-lg">11:00 am - 01:30 pm</span>
              </span>
              <span className="flex flex-col">
                <span className="ExactLocation flex flex-row p-1 gap-2 items-center sm:text-lg lg:text-2xl font-normal">
                  <FaLocationDot size={25} /> Cheriya PallamThuruth, North
                  Paravur
                </span>
                <span className="phoneHeading pl-10">Event Address</span>
              </span>
              <span className="flex flex-col">
                <span className="phoneNumber flex flex-row p-1 gap-2 items-center sm:text-lg lg:text-2xl font-normal">
                  <FaPhoneAlt size={25} /> +91 6282008742
                </span>
                <span className="phoneHeading pl-10">Phone Number</span>
              </span>
            </div>
            <div className="mapContainer sm:p-2 lg:p-0 sm:mt-5 lg:mt-0">
              <div className="flex flex-col w-full h-full">
                <div className="font black sm:text-xl lg:text-2xl flex w-full justify-end pb-10">
                  <button
                    onClick={() => window.open(homeUrl, "_blank")}
                    className="bg-white border border-black  hover:bg-gray-light transition-colors duration-300 text-black font-bold py-2 px-4 hover:shadow-lg rounded-xl inline-flex items-center"
                  >
                    <FaMapLocation className="text-blue w-6 h-6 mr-2" />
                    <span className="text-darkblue">Open Map</span>
                  </button>
                </div>
                <div>
                  <iframe
                    className="rounded-lg flex sm:w-full h-[300px] lg:w-[650px] lg:h-[450px]"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3927.302255358872!2d76.21671507503329!3d10.15606798995746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDA5JzIxLjgiTiA3NsKwMTMnMDkuNCJF!5e0!3m2!1sen!2sin!4v1727613422247!5m2!1sen!2sinhttps://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3927.302255358872!2d76.21671507503329!3d10.15606798995746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDA5JzIxLjgiTiA3NsKwMTMnMDkuNCJF!5e0!3m2!1sen!2sin!4v1727613422247!5m2!1sen!2sin"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="MapMainDiv flex sm:flex-col lg:flex-row lg:justify-between">
            <div className="textContainerDiv flex flex-col sm:gap-5 lg:gap-10">
              <span className="sm:text-2xl lg:text-3xl font-semibold text-center">
                St.Thomas Kottakkavu Forance Church Auditorium
              </span>
              <span className="flex flex-col ">
                <span className="date flex flex-row p-1 gap-2 items-center sm:text-xl lg:text-2xl font-normal">
                  <FaCalendarAlt size={25} />
                  10th November 2024
                </span>
                <span className="time pl-10 text-lg">11:00 am - 01:30 pm</span>
              </span>
              <span className="flex flex-col">
                <span className="ExactLocation flex flex-row p-1 gap-2 items-center sm:text-lg lg:text-2xl font-normal">
                  <FaLocationDot size={25} /> Kottakkavu, North Paravur, Kochi
                </span>
                <span className="phoneHeading pl-10">Event Address</span>
              </span>
              <span className="flex flex-col">
                <span className="phoneNumber flex flex-row p-1 gap-2 items-center sm:text-lg lg:text-2xl font-normal">
                  <FaPhoneAlt size={25} /> +91 6282382742
                </span>
                <span className="phoneHeading pl-10">Phone Number</span>
              </span>
            </div>
            <div className="mapContainer sm:p-2 lg:p-0 sm:mt-5 lg:mt-0">
              <div className="flex flex-col w-full h-full">
                <div className="font black sm:text-xl lg:text-2xl flex w-full justify-end pb-10">
                  <button
                    onClick={() => window.open(venueUrl, "_blank")}
                    className="bg-white border border-black  hover:bg-gray-light transition-colors duration-300 text-black font-bold py-2 px-4 hover:shadow-lg rounded-xl inline-flex items-center"
                  >
                    <FaMapLocation className="text-blue w-6 h-6 mr-2" />
                    <span className="text-darkblue">Open Map</span>
                  </button>
                </div>
                <div>
                  <iframe
                    className="  rounded-lg flex sm:w-full h-[300px] lg:w-[650px] lg:h-[450px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5517.750057118041!2d76.21559107628124!3d10.150563370423267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081a795d8f53c3%3A0xf569a361d42788ee!2sSt.%20Thomas%20Kottakkavu%20Forane%20Church%2C%20North%20Paravur!5e1!3m2!1sen!2sin!4v1728048131345!5m2!1sen!2sin"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RouteMap;
