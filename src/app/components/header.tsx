import { motion } from 'framer-motion'

export const Header = () => {
  return (
    <motion.header
      className="p-6 flex justify-between items-center z-10 relative"
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.6, delay: 0.5}}
    >
      <div className="text-l md:text-xl tracking-widest">WONDERGROUND</div>
      <nav className="flex gap-6 text-sm">
        <a href="#" className="hover:underline">ABOUT</a>
        <a href="#" className="hover:underline">CONTACT</a>
      </nav>
    </motion.header>
  )
}
