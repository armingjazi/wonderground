import { motion } from "framer-motion";
import { MouseEvent } from "react";

export const Header = ({
  onAbout,
}: {
  onAbout: (show: boolean) => void;
}) => {
  const handleAboutClick = (e: MouseEvent) => {
    e.preventDefault();
    onAbout(true);
  };

  return (
    <motion.header
      className="p-6 flex justify-between items-center z-10 relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="text-l md:text-xl tracking-widest">WONDERGROUND</div>
      <nav className="flex gap-6 text-sm">
        <a href="#" onClick={handleAboutClick} className="hover:underline">
          ABOUT
        </a>
      </nav>
    </motion.header>
  );
};
