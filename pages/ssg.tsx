import type { GetStaticProps, NextPage } from "next";
import { gql } from "@apollo/client";

import client from "../src/apollo-client";
import Slider from "../src/components/slider";
import Layout from "../src/components/layout";
import { Program } from "../src/types/types";

interface IProps {
  programs: Program[];
}

const SSG: NextPage<IProps> = ({ programs }) => {
  return (
    <Layout>
      <div className="h-screen pt-32">
        <Slider programs={programs} />
      </div>
    </Layout>
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

  return {
    props: {
      programs: data.program,
    },
  };
};
