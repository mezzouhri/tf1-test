import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { gql } from "@apollo/client";
import client from "../src/apollo-client";
import PROGRAMS from "../src/db";

import { Program } from "../src/types/types";
import Slider from "../src/components/slider";

interface IProps {
  programs: Program[];
}

const SSR: NextPage<IProps> = ({ programs }) => {
  //console.log("programs", programs);
  return (
    <div className=" bg-black text-white h-screen pt-32">
      <div className="mx-auto max-w-7xl">
        <Slider programs={programs} />
      </div>
    </div>
  );
};

export default SSR;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Programs {
        program {
          id
          name
          thumnail {
            url
            alt
          }
        }
      }
    `,
  });

  return {
    props: {
      programs: data.program.slice(0, 10),
      //programs: [...PROGRAMS, ...PROGRAMS],
    },
  };
};
