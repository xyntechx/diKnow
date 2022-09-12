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
      <main class="flex flex-col items-center justify-start my-10">
        <Dino name={props.params.dino} />
        <a
          href="/"
          class="bg-yellow-300 py-2 px-4 rounded-md duration-300 shadow-md text-lg mt-4 hover:(shadow-lg) focus:(shadow-lg outline-none) mt-10"
        >
          Continue Browsing...
        </a>
        <a href="https://github.com/xyntechx/diKnow" target="_blank">
          <img
            class="fixed z-10 md:(bottom-5 right-5) bottom-2 right-2 animate-bounce"
            width="45"
            height="45"
            src="/github.png"
            alt="Explore diKnow on GitHub"
          />
        </a>
      </main>
    </div>
  );
};

export default DinoPage;
