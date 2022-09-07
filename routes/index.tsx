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
        <h1 class={tw`md:(text-5xl) text-4xl font-bold text-center`}>
          diKnow
        </h1>
        <p class={tw`mt-1 text-lg text-center`}>
          Get started by searching for a dinosaur!
        </p>
        <Search />
        <a href="https://github.com/xyntechx/diKnow" target="_blank">
          <img
            class={tw`fixed z-10 md:(bottom-5 right-5) bottom-2 right-2 animate-bounce`}
            width="45"
            height="45"
            src="/github.png"
            alt="Explore diKnow on GitHub"
          />
        </a>
      </main>
    </div>
  );
}
