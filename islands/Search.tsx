/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import DINOLIST from "../utils/dinolist.ts";
import Info from "../components/Info.tsx";

const Search = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([""]);

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
    <div class={tw`flex flex-col items-center justify-start`}>
      <input
        type="text"
        placeholder="Dino Name"
        defaultValue=""
        onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
        class={tw`p-2 w-96 border-2 border-yellow-400 rounded-md text-lg mt-4 focus:(outline-none border-yellow-500)`}
      />
      <button
        onClick={() => search(query)}
        class={tw`bg-yellow-400 py-2 px-4 rounded-md duration-300 shadow-md text-lg mt-4 hover:(shadow-lg) focus:(shadow-lg outline-none)`}
      >
        Search
      </button>
      {}

      {result.includes("No dinosaurs found!")
        ? <p class={tw`italic text-base mt-4`}>No dinosaurs found!</p>
        : (
          <div class={tw`flex flex-col items-center justify-center text-lg`}>
            {result.map((name) => <Info name={name} />)}
          </div>
        )}
    </div>
  );
};

export default Search;
