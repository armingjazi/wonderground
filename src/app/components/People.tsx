import { Person, usePeople } from "@/app/data/usePeople";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Profile = ({ person, index }: { person: Person; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-8 py-16 md:py-24 first:pt-0 border-b border-neutral-200 last:border-none"
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.6, delay: index * 0.2}}
    >
      <div
        className={`flex flex-col md:flex-row w-full items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16`}>
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <div className="relative overflow-hidden aspect-square">
            <Image
              src={person.image}
              alt={person.name}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
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
            {people.map((person, index) => (
              <Profile key={person.id} person={person} index={index} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
