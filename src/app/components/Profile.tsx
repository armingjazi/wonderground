import Image from "next/image";
import { Person } from "@/app/data/usePeople";

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
    <div
      className="flex flex-col md:flex-row items-center gap-8 py-8 md:py-16 first:pt-0"
      id={person.id}
    >
      <div
        className={`flex flex-col md:flex-row items-center md:items-start w-full  ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-2 md:gap-10 md:gap-16`}
      >
        <div className="w-full md:w-1/4 mb-2 md:mb-0">
          <div className="relative overflow-hidden aspect-square w-1/2 h-1/2 md:w-full md:h-full">
            <Image
              src={person.image}
              alt={person.name}
              fill
              sizes={"600px"}
              className="object-cover rounded-md transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 md:text-left">
          <h3 className="text-2xl font-light tracking-wide mb-1">
            {person.name}
          </h3>
          <p className="text-md font-light leading-relaxed mb-4">
            <em>{person.title}</em>
          </p>
          <p
            className="text-lg font-light leading-relaxed"
            dangerouslySetInnerHTML={{ __html: person.bio }}
          />
        </div>
      </div>
    </div>
  );
};

export { Profile };
