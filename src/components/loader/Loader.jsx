import { motion } from "framer-motion";
import loaderIcon from "../../assets/loaderIcon.png"
const Loader = () => {
  const loaderVariants = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <div className="fixed bg-white z-50 inset-0 flex justify-center items-center w-full backdrop-blur-3xl h-screen">
      <motion.div
        variants={loaderVariants}
        animate="animate"
        className="w-32 bg-pink-500 rounded-full"
      >
        <img src={loaderIcon} alt="Loader" className="w-80"/>
      </motion.div>
    </div>
  );
};

export default Loader;
