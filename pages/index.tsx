import Link from "next/link";
import type { NextPage } from "next";

import Layout from "../src/components/layout";
import { Program } from "../src/types/types";

interface IProps {
  programs: Program[];
}

const Home: NextPage<IProps> = ({ programs }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <span className=" text-xl font-bold ">
          Bonjour, Veuillez cliquer sur les liens ci-dessous pour voir le
          travail demandé :
        </span>
        <ul className="list-disc  text-xl font-bold space-y-1">
          <li className="hover:text-blue-400 mt-3">
            <Link href="/ssr">{`en SSR (Server Side Rendering)`}</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link href="/ssg">{`en SSG (Static Site Generation)`}</Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
