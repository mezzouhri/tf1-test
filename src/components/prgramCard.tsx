import Image from "next/image";
import { FC } from "react";
import { Thumnail } from "../types/types";
import { PlusIcon } from "@heroicons/react/solid";

interface IProps {
  name: string;
  backgroundImage: Thumnail;
}

const ProgramCard: FC<IProps> = ({ name, backgroundImage }) => {
  return (
    <div className="h-[297px] w-[200px] flex flex-col cursor-pointer group">
      <div className="relative h-[266px] w-[200px] rounded-lg transition duration-200 ease-out hover:scale-105">
        <Image
          className="rounded-lg"
          src={backgroundImage.url}
          alt={backgroundImage.alt}
          width={200}
          height={266}
        />
        <div className="absolute hidden group-hover:block bottom-0 right-0  bg-opacity-70 bg-black rounded-lg mr-1 mb-1 group-custom">
          <div className="flex justify-center items-center p-1 group-custom-hover:grow ">
            <PlusIcon className="h-6 w-6" />
            <span className="hidden group-custom-hover:block text-xs">
              Ajouter à ma liste
            </span>
          </div>
        </div>
      </div>
      <span className="mt-2.5 text-center truncate text-sm group-hover:text-blue-700">
        {name}
      </span>
    </div>
  );
};

export default ProgramCard;
