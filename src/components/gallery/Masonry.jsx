import React, { useEffect, useState } from "react";
import square1 from "../../assets/photoGallery/gs1.webp";
import square2 from "../../assets/photoGallery/gs2.webp";
import square3 from "../../assets/photoGallery/gs3.webp";
import square4 from "../../assets/photoGallery/gs4.webp";


import wide1 from "../../assets/photoGallery/gL3.webp";
import wide2 from "../../assets/photoGallery/gL4.webp";
import wide3 from "../../assets/photoGallery/gL1.webp";
import wide4 from "../../assets/photoGallery/gL2.webp";

const images = [
  { src: square1, type: "square", name: "square1" },
  { src: wide1, type: "wide", name: "wide1" },
  { src: wide2, type: "wide", name: "wide2" },
  { src: square2, type: "square", name: "square2" },
  { src: wide3, type: "wide", name: "wide3" },
  { src: square3, type: "square", name: "square3" },
  { src: square4, type: "square", name: "square4" },
  { src: wide4, type: "wide", name: "wide4" },
 
];

const Masonry = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track active image for scaling
  const [scale, setScale] = useState(false); // Control scale transformation

  // Effect to shuffle active image
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setActiveIndex(randomIndex);
      setScale(true);
      setTimeout(() => setScale(false), 1000); // Scale down after 1 second
    }, 2500); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((img, index) => (
        <div
          key={index}
          className={`overflow-hidden rounded-lg ${
            img.type === "wide" ? "col-span-3" : "sm:col-span-3 lg:col-span-1 "
          }`}
        >
          <img
            src={img.src}
            alt={`Gallery ${index}`}
            className={`w-full h-full object-cover hover:scale-110 transition-transform duration-500 ${
              index === activeIndex && scale ? "scale-110" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default Masonry;
