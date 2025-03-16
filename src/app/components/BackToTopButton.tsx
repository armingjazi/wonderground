import { motion } from "framer-motion";

export function BackToTopButton(props: { onClick: () => void }) {
  return (
    <motion.button
      onClick={props.onClick}
      className="fixed bottom-12 right-1/2 z-50 text-3xl hover:opacity-70 transition-opacity bg-black/50 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.8 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </motion.button>
  );
}
