/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Dino from "../islands/Dino.tsx";

const DinoPage = (props: PageProps) => {
  return (
    <div>
      <Head>
        <title>diKnow | {props.params.dino}</title>
        <meta name="description" content="Learn about dinosaurs" />
      </Head>
      <main class={tw`flex flex-col items-center justify-start my-10`}>
        <Dino name={props.params.dino} />
        <a
          href="/"
          class={tw`bg-yellow-300 py-2 px-4 rounded-md duration-300 shadow-md text-lg mt-4 hover:(shadow-lg) focus:(shadow-lg outline-none) mt-10`}
        >
          Continue Browsing...
        </a>
      </main>
    </div>
  );
};

export default DinoPage;
