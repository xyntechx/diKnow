/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import DINOLIST from "../utils/dinolist.ts";
import Info from "../components/Info.tsx";

const Search = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([
    "What are you waiting for? Search now 🦕",
  ]);

  const search = (query: string) => {
    let tempResult = [];
    const queryLength = query.length;

    for (let i = 0; i < DINOLIST.length; i++) {
      const name = DINOLIST[i][0].toLowerCase();
      if (query && name.slice(0, queryLength).includes(query.toLowerCase())) {
        tempResult.push(name.charAt(0).toUpperCase() + name.slice(1));
      }
    }
    if (tempResult.length > 0) setResult(tempResult);
    else setResult(["No dinosaurs found!"]);
  };

  return (
    <div class={tw`flex flex-col items-center justify-start md:(w-1/2) w-4/5`}>
      <input
        type="text"
        placeholder="Dino Name"
        value={query ? query : ""}
        onChange={(e) =>
          setQuery((e.target as HTMLInputElement).value)}
        class={tw`p-2 w-full border-2 border-yellow-400 rounded-md text-lg mt-4 text-center focus:(outline-none border-yellow-500)`}
      />
      <button
        onClick={() => search(query)}
        class={tw`bg-yellow-400 py-2 px-4 rounded-md duration-300 shadow-md text-lg mt-4 hover:(shadow-lg) focus:(shadow-lg outline-none)`}
      >
        Search
      </button>
      {}

      {result.includes("No dinosaurs found!") ||
          result.includes("What are you waiting for? Search now 🦕")
        ? (
          <p class={tw`italic text-base mt-4 text-center w-full px-2`}>
            {result[0]}
          </p>
        )
        : (
          <div
            class={tw`flex flex-col items-center justify-center w-3/5 md:(w-full)`}
          >
            {result.map((name) => <Info name={name} />)}
          </div>
        )}
    </div>
  );
};

export default Search;
