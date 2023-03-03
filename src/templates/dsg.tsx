import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import icon from "../images/icon.png";

export default function DSG(props: any) {
  // Deferred site generation SSG "using defer:true" and server-side call the API
  // "Not Counted at First site build but cached after the first page load and act as SSG"
  const {
    pageContext: { dogImage },
  } = props;
  console.log("DSG Template", dogImage);
  const features = [
    {
      name: "Push to deploy.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: icon,
    },
    {
      name: "SSL certificates.",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      icon: icon,
    },
    {
      name: "Database backups.",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: icon,
    },
  ];

  return (
    <main>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link
          className="text-base font-semibold leading-7 text-indigo-600 my-4 underline"
          to="/"
        >
          Home
        </Link>
        <br />
        <h1 className="w-full text-left text-lg font-semibold leading-7 text-zinc-600 my-4">
          DSG: Deferred Static Generation
        </h1>
        <img className="w-96 h-auto max-w-full my-4" alt="dog" src={dogImage} />
      </div>

      <div className="overflow-hidden bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Deploy faster
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A better workflow
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <img
                          src={feature.icon}
                          className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
