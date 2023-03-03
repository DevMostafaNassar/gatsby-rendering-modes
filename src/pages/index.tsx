import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <header className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="w-full text-left text-lg font-semibold leading-7 text-zinc-600 m-4">
          Rendering Modes Starter
        </h1>
        <ul className="w-full flex justify-start items-center">
          <li>
            <Link
              className="text-base font-semibold leading-7 text-indigo-600 m-4 underline"
              to="/ssgPage"
            >
              SSG Page
            </Link>
          </li>
          <li>
            <Link
              className="text-base font-semibold leading-7 text-indigo-600 m-4 underline"
              to="/ssr"
            >
              SSR Page
            </Link>
          </li>
          <li>
            <Link
              className="text-base font-semibold leading-7 text-indigo-600 m-4 underline"
              to="/ssg"
            >
              SSG Template
            </Link>
          </li>
          <li>
            <Link
              className="text-base font-semibold leading-7 text-indigo-600 m-4 underline"
              to="/dsg"
            >
              DSG Template
            </Link>
          </li>
        </ul>
      </header>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
