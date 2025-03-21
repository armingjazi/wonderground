import { motion } from "framer-motion";
import { FaYoutube, FaVimeo, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";

export const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      className="w-full bg-black text-white py-16 flex flex-col items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="w-full max-w-6xl px-4 flex flex-col items-center">
        <div className="flex items-center w-full mb-12">
          <motion.div
            variants={lineVariants}
            className="h-px bg-white flex-1"
          />
          <motion.h2
            variants={itemVariants}
            className="px-4 text-2xl font-light uppercase tracking-widest"
          >
            CONTACT & BOOKINGS
          </motion.h2>
          <motion.div
            variants={lineVariants}
            className="h-px bg-white flex-1"
          />
        </div>

        {/* Email */}
        <motion.div
          variants={itemVariants}
          className="mb-16 flex flex-col items-center"
        >
          <Link
            href="mailto:fani@fanibenages.com"
            className="text-lg md:text-xl hover:text-gray-300 transition-colors duration-300"
          >
            fani@fanibenages.com
          </Link>
          <Link
            href="mailto:international@wondergroundcompany.com"
            className="text-lg md:text-xl hover:text-gray-300 transition-colors duration-300"
          >
            international@wondergroundcompany.com
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="flex space-x-8">
          <motion.a
            href="https://www.youtube.com/@wonderground_company"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <FaYoutube size={24} />
          </motion.a>
          <motion.a
            href="https://vimeo.com/wonderground"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <FaVimeo size={24} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/wonderground_company/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/wondergroundcompany"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <FaFacebook size={24} />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};
