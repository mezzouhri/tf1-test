import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { gql } from "@apollo/client";
import client from "../src/apollo-client";
import PROGRAMS from "../src/db";

import { Program } from "../src/types/types";
import Slider from "../src/components/slider";

interface IProps {
  programs: Program[];
}

const SSG: NextPage<IProps> = ({ programs }) => {
  //console.log("programs", programs);
  return (
    <div className=" bg-black text-white h-screen pt-32">
      <div className="mx-auto max-w-7xl">
        <Slider programs={programs} />
      </div>
    </div>
  );
};

export default SSG;

export const getStaticProps: GetStaticProps = async () => {
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

  // const programs = data.program.map((program: Program) => {
  //   const newUrl = program.thumnail.url.split("/");
  //   while (newUrl[5].startsWith("v", 1)) {
  //     newUrl[5] = newUrl[5].slice(1);
  //   }
  //   program.thumnail.url = newUrl.join("/");
  //   return program;
  // });

  //console.log("programs", programs);

  return {
    props: {
      programs: data.program,
      //programs: PROGRAMS,
    },
  };
};
