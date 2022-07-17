import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { FC, useRef, useState } from "react";
import { Program } from "../types/types";
import ProgramCard from "./prgramCard";

interface IProps {
  programs: Program[];
}

const Slider: FC<IProps> = ({ programs }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHidden, setIsHidden] = useState(true); // permets de controller la visibilité du btn left de scrolling

  const slideLeft = () => {
    let { scrollLeft, clientWidth } = sliderRef.current!;
    const nbreOfCard = Math.floor(clientWidth / 224); // Dans une app réelle, le 224 ne dois pas etre hardCoded, mais calculé automatiquement du with du programCard
    sliderRef.current!.scrollLeft = scrollLeft - nbreOfCard * 224;
  };

  const slideRight = () => {
    let { scrollLeft, clientWidth } = sliderRef.current!;
    const nbreOfCard = Math.floor(clientWidth / 224); // Dans une app réelle, le 224 ne dois pas etre hardCoded, mais calculé automatiquement du with du programCard
    sliderRef.current!.scrollLeft = scrollLeft + nbreOfCard * 224;
  };

  const handleScroll = () =>
    sliderRef.current!.scrollLeft ? setIsHidden(false) : setIsHidden(true);

  return (
    <div className="relative flex items-center">
      <ChevronLeftIcon
        onClick={slideLeft}
        className={`h-12 w-12 absolute bg-gray-800 rounded-full cursor-pointer z-10 left-0 -ml-7  duration-200 ease-out hover:scale-125 ${
          isHidden && "hidden"
        }`}
      />
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth space-x-6 scrollbar-hide pt-2"
        onScroll={handleScroll}
      >
        {programs.map((program: Program) => (
          <ProgramCard
            key={program.id}
            name={program.name}
            backgroundImage={program.thumnail}
          />
        ))}
      </div>
      <ChevronRightIcon
        onClick={slideRight}
        className="hidden sm:block h-12 w-12 absolute  bg-gray-800 rounded-full cursor-pointer z-10 right-0 -mr-7 duration-200 ease-out hover:scale-125"
      />
    </div>
  );
};
export default Slider;
