import { usePeople } from "@/app/data/usePeople";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useCompany } from "@/app/data/useCompany";
import { LanguageKey } from "@/app/util/language";
import { Profile } from "@/app/components/Profile";

export const Company = ({ language }: { language: LanguageKey }) => {
  const { people } = usePeople({ language });
  const { company } = useCompany({ language });

  const main = people.filter((person) => person.type === "main");

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
          <div className="flex flex-col mb-12">
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
