// CardStack.js
import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import image1 from "../../assets/heroGallery/1dibin.jpeg";

import image3 from "../../assets/heroGallery/3dibin.jpg";
import image4 from "../../assets/heroGallery/2dibin.jpg";
import image5 from "../../assets/heroGallery/1dibin.jpeg";

const CardSwipe = () => {
  const cardData = [
    { id: 1, url: image1, title: "Card 1" },

    { id: 4, url: image4, title: "Card 4" },

    { id: 3, url: image5, title: "Card 3" },
    { id: 5, url: image3, title: "Card 5" },
  ];
  const [cards, setCards] = useState(cardData);

  return (
    <div
      className="grid place-items-center"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    >
      {cards.map((card) => (
        <Card key={card.id} cards={cards} setCards={setCards} {...card} />
      ))}
    </div>
  );
};

const Card = ({ id, url, cards, setCards }) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-80, 0, 80], [0, 1, 0]);
  const rotateRaw = useTransform(x, [-80, 80], [-18, 18]);

  const isFront = id === cards.length - 1;
  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    console.log("id is:", id);
    if (id === 1) {
      return;
    } else {
      if (Math.abs(x.get()) > 50) {
        setCards((pv) => pv.filter((v) => v.id !== id));
      }
    }
  };

  return (
    <motion.img
      src={url}
      alt="Placeholder"
      className="sm:h-96 lg:h-[550px]  object-cover origin-bottom rounded-lg hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.350s transform",
      }}
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
    />
  );
};

export default CardSwipe;
