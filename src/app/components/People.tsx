import { Person, usePeople } from "@/app/data/usePeople";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCompany } from "@/app/data/useCompany";
import { Language } from "@/app/util/language";

export interface ProfileProps {
  person: Person;
  index: number;
  orderFunction?: (index: number) => boolean;
}

const Profile = ({
  person,
  index,
  orderFunction = (index: number) => index % 2 === 0,
}: ProfileProps) => {
  const isEven = orderFunction(index);

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-8 py-12 md:py-20 first:pt-0"
      initial={{ opacity: 0, y: 20, scale: 1.0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileInView={{ scale: 1.1 }}
      id={person.id}
    >
      <div
        className={`flex flex-col md:flex-row w-full items-center  ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-2 md:gap-10 md:gap-16`}
      >
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="relative overflow-hidden aspect-square  w-1/2 h-1/2 md:w-full md:h-full">
            <Image
              src={person.image}
              alt={person.name}
              fill
              sizes={"600px"}
              className="object-cover rounded-md transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div
          className={`w-full md:w-7/12 ${isEven ? "md:text-left" : "md:text-left"}`}
        >
          <h3 className="text-2xl font-light tracking-wide mb-1">
            {person.name}
          </h3>
          <p className="text-base font-light leading-relaxed mb-4">
            <em>{person.title}</em>
          </p>
          <p
            className="text-base font-light leading-relaxed"
            dangerouslySetInnerHTML={{ __html: person.bio }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export const People = ({ language }: { language: Language }) => {
  const people = usePeople({ language });
  const company = useCompany({ language });

  const main = people.filter((person) => person.type === "main");
  const collaborators = people.filter(
    (person) => person.type === "collaborator",
  );
  const performers = people.filter((person) => person.type === "performer");

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
          <div className="flex flex-col mb-24">
            <div className="flex items-center w-full mb-12">
              <motion.div
                variants={lineVariants}
                className="h-px bg-white flex-1"
              />
              <motion.h2
                variants={itemVariants}
                className="px-4 text-2xl font-light uppercase tracking-widest"
              >
                THE COMPANY
              </motion.h2>
              <motion.div
                variants={lineVariants}
                className="h-px bg-white flex-1"
              />
            </div>
            <span
              className="text-lg font-light leading-relaxed"
              dangerouslySetInnerHTML={{ __html: company.bio }}
            />
          </div>
          <div className="flex flex-col">
            {main.map((person, index) => (
              <Profile key={person.id} person={person} index={index} />
            ))}
          </div>
          <div className="flex items-center w-full mb-24">
            <motion.div
              variants={lineVariants}
              className="h-px bg-white flex-1"
            />
            <motion.h2
              variants={itemVariants}
              className="px-4 text-2xl font-light uppercase tracking-widest"
            >
              PERFORMERS
            </motion.h2>
            <motion.div
              variants={lineVariants}
              className="h-px bg-white flex-1"
            />
          </div>
          <div className="flex flex-col">
            {performers.map((person, index) => (
              <Profile key={person.id} person={person} index={index} />
            ))}
          </div>
          <div className="flex items-center w-full mb-24">
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
              <Profile key={person.id} person={person} index={index} orderFunction={(index) => index % 2 !== 0 } />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
