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
      </main>
    </div>
  );
};

export default DinoPage;
