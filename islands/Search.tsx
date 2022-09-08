/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";
import DINOLIST from "../utils/dinolist.ts";
import Info from "../islands/Info.tsx";

const Search = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([
    "What are you waiting for? Search now 🦕",
  ]);
  const [bookmarked, setBookmarked] = useState<string[]>([]);

  useEffect(() => {
    getBookmarked();
  }, []);

  const getBookmarked = () => {
    let tempBookmarked = [];
    for (let i = 0; i < DINOLIST.length; i++) {
      const name = DINOLIST[i][0].charAt(0).toUpperCase() +
        DINOLIST[i][0].slice(1);
      const stored = JSON.parse(localStorage.getItem(name)!);
      if (stored === true) tempBookmarked.push(name);
    }
    setBookmarked(tempBookmarked);
  };

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
        class={tw`p-2 w-full border-2 border-yellow-300 rounded-md text-lg mt-4 text-center duration-300 focus:(outline-none border-yellow-400)`}
      />
      <button
        onClick={() => search(query)}
        class={tw`bg-yellow-300 py-2 px-4 rounded-md duration-300 shadow-md text-lg mt-4 hover:(shadow-lg) focus:(shadow-lg outline-none)`}
      >
        Search
      </button>

      {result.includes("No dinosaurs found!") ||
          result.includes("What are you waiting for? Search now 🦕")
        ? (
          <div class={tw`w-4/5 md:(w-full)`}>
            <p class={tw`italic text-base mt-4 text-center w-full px-2`}>
              {result[0]}
            </p>
            <div
              class={tw`flex flex-col items-center justify-center w-full mt-5`}
            >
              <p class={tw`w-full text-left text-lg font-bold -mb-4`}>
                🔖 Bookmarked
              </p>
              {bookmarked.length > 0
                ? (
                  <div class={tw`w-full`}>
                    {bookmarked.map((name) => <Info name={name} />)}
                  </div>
                )
                : (
                  <p class={tw`w-full text-left text-base mt-4`}>
                    No bookmarks yet!
                  </p>
                )}
            </div>
          </div>
        )
        : (
          <div
            class={tw`flex flex-col items-center justify-center w-4/5 md:(w-full)`}
          >
            {result.map((name) => <Info name={name} />)}
          </div>
        )}
    </div>
  );
};

export default Search;
