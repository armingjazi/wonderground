import { usePeople } from "@/app/data/usePeople";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { LanguageKey } from "@/app/util/language";
import { Profile } from "@/app/components/Profile";

export const Team = ({ language }: { language: LanguageKey }) => {
  const { people } = usePeople({ language });

  const collaborators = people.filter(
    (person) => person.type === "collaborator",
  );
  const performers = people.filter((person) => person.type === "performer");
  const media = people.filter((person) => person.type === "media");

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
          <div className="flex items-center w-full mb-12 mt-6">
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
          <div className="flex items-center w-full mb-12 mt-6">
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
              <Profile
                key={person.id}
                person={person}
                index={index}
                orderFunction={(index) => index % 2 !== 0}
              />
            ))}
          </div>
          <div className="flex items-center w-full mb-12 mt-6">
            <motion.div
              variants={lineVariants}
              className="h-px bg-white flex-1"
            />
            <motion.h2
              variants={itemVariants}
              className="px-4 text-2xl font-light uppercase tracking-widest"
            >
              PRODUCTION & MEDIA
            </motion.h2>
            <motion.div
              variants={lineVariants}
              className="h-px bg-white flex-1"
            />
          </div>
          <div className="flex flex-col">
            {media.map((person, index) => (
              <Profile
                key={person.id}
                person={person}
                index={index}
                orderFunction={(index) => index % 2 !== 0}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
