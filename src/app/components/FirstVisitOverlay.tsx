import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FirstVisitOverlay: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPulsing, setIsPulsing] = useState(false);

  const handleClick = () => {
    setIsPulsing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 600); // Adjust this timing to match your animation duration
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isPulsing ? 100 : 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute h-12 w-12 rounded-full bg-white"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
            className="relative h-16 w-16 overflow-hidden bg-black transition-colors duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FirstVisitOverlay;
