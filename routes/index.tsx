/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Search from "../islands/Search.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <div>
      <Head>
        <title>diKnow</title>
        <meta name="description" content="Learn about dinosaurs" />
      </Head>
      <main class={tw`flex flex-col items-center justify-start my-10 w-full`}>
        <h1 class={tw`text-5xl font-bold`}>
          diKnow
        </h1>
        <p class={tw`mt-1 text-lg`}>Get started by searching for a dinosaur!</p>
        <Search />
      </main>
    </div>
  );
}
