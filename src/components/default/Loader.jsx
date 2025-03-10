import { motion } from "framer-motion";

const AutoRentalLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8"
    >
      {/* Animated Logo */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          rotate: [0, -5, 5, -5, 0],
          transition: {
            duration: 1.5,
            ease: "easeInOut"
          }
        }}
        className="relative"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <img
            src="/Logo Auto Rental Tirana Black.png"
            alt="Auto Rental Tirana Logo"
            className="w-64 h-auto" // Adjust size here (original aspect ratio maintained)
          />
        </motion.div>
      </motion.div>

      {/* Loading Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center space-x-2 text-gray-600"
      >
        <motion.span
          animate={{
            scale: [1, 1.5, 1],
            transition: {
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut"
            }
          }}
          className="h-2 w-2 bg-gray-800 rounded-full"
        />
        <motion.span
          animate={{
            scale: [1, 1.5, 1],
            transition: {
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.2
            }
          }}
          className="h-2 w-2 bg-gray-800 rounded-full"
        />
        <motion.span
          animate={{
            scale: [1, 1.5, 1],
            transition: {
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.4
            }
          }}
          className="h-2 w-2 bg-gray-800 rounded-full"
        />
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{
          width: "100%",
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200"
      >
        <div className="h-full w-1/3 bg-gray-800 rounded-r-full" />
      </motion.div>
    </motion.div>
  );
};

export default AutoRentalLoader;