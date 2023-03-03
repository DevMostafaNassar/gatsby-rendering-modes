import path from "path";
import { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const dogImage = (async () => {
    const image = await fetch("https://dog.ceo/api/breeds/image/random").then(
      (res) => res.json()
    );
    return image.message;
  })();
  // Normal static site generation SSG and server-side call the API "Counted at First site build"
  actions.createPage({
    path: "/ssg",
    component: path.resolve("src/templates/ssg.tsx"),
    context: {
      dogImage: await dogImage,
    },
  });
  // Deferred site generation SSG "using defer:true" and server-side call the API "Not Counted at First site build"
  actions.createPage({
    path: "/dsg",
    component: path.resolve("src/templates/dsg.tsx"),
    context: {
      dogImage: await dogImage,
    },
    defer: true,
  });
};
