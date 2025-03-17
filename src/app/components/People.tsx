import { Person, usePeople } from "@/app/data/usePeople";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Profile = ({ person, index }: { person: Person; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-8 py-16 md:py-24 first:pt-0"
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.6, delay: index * 0.2}}
    >
      <div
        className={`flex flex-col md:flex-row w-full items-center  ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16`}>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="relative overflow-hidden aspect-square">
            <Image
              src={person.image}
              alt={person.name}
              fill
              className="object-cover rounded-md transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div className={`w-full md:w-7/12 ${isEven ? 'md:text-left' : 'md:text-left'}`}>
          <h3 className="text-2xl font-light tracking-wide mb-1">{person.name}</h3>
          <p className="text-base font-light leading-relaxed">{person.bio}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const People = () => {
  const people = usePeople();

  const main = people.filter((person) => person.type === "main");
  const collaborators = people.filter((person) => person.type === "collaborator");

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
    <AnimatePresence>
      <motion.div className="bg-transparent z-30 p-8 gap-4 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col">
            {main.map((person, index) => (
              <Profile key={person.id} person={person} index={index} />
            ))}
          </div>
          <div className="flex items-center w-full mb-12">
            <motion.div
              variants={lineVariants}
              className="h-px bg-white flex-1"
            />
            <motion.h2
              variants={itemVariants}
              className="px-4 text-2xl font-light uppercase tracking-widest"
            >
              COLLABORATORS
            </motion.h2>
            <motion.div
              variants={lineVariants}
              className="h-px bg-white flex-1"
            />
          </div>
          <div className="flex flex-col">
            {collaborators.map((person, index) => (
              <Profile key={person.id} person={person} index={index} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
