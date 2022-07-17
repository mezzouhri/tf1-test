import type { GetServerSideProps, NextPage } from "next";
import { gql } from "@apollo/client";

import client from "../src/apollo-client";
import Slider from "../src/components/slider";
import Layout from "../src/components/layout";
import { Program } from "../src/types/types";

interface IProps {
  programs: Program[];
}

const SSR: NextPage<IProps> = ({ programs }) => {
  return (
    <Layout>
      <div className="h-screen pt-32">
        <Slider programs={programs} />
      </div>
    </Layout>
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
      programs: data.program,
    },
  };
};
