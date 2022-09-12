import { useEffect, useState } from "preact/hooks";
import DINOLIST from "../utils/dinolist.ts";
import Info from "../islands/Info.tsx";

const Search = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([
    "What are you waiting for? Search now 🦕",
  ]);
  const [bookmarked, setBookmarked] = useState<string[]>([]);
  const [suggested, setSuggested] = useState<string[]>([]);
  const [pressToggle, setPressToggle] = useState(false);

  useEffect(() => {
    getBookmarked();
    getSuggested();
  }, []);

  useEffect(() => {
    search(query);
  }, [pressToggle]);

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

  const getSuggested = () => {
    let tempSuggested = [];
    for (let i = 0; i < 5; i++) {
      const index = Math.floor(Math.random() * DINOLIST.length);
      const name = DINOLIST[index][0].charAt(0).toUpperCase() +
        DINOLIST[index][0].slice(1);
      tempSuggested.push(name);
    }
    setSuggested(tempSuggested);
  };

  const search = (query: string) => {
    let tempResult = [];
    const queryLength = query.length;

    for (let i = 0; i < DINOLIST.length; i++) {
      const name = DINOLIST[i][0].toLowerCase();
      const location = DINOLIST[i][3].toLowerCase();
      if (query) {
        if (
          name.slice(0, queryLength).includes(query.toLowerCase()) ||
          location.slice(0, queryLength).includes(query.toLowerCase())
        ) {
          tempResult.push(name.charAt(0).toUpperCase() + name.slice(1));
        }
      }
    }
    if (tempResult.length > 0) setResult(tempResult);
    else setResult(["No dinosaurs found!"]);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      setPressToggle(!pressToggle);
    }
  };

  return (
    <div class="flex flex-col items-center justify-start md:(w-1/2) w-4/5">
      <input
        type="text"
        placeholder="Dino Name / Location"
        value={query ? query : ""}
        onChange={(e) =>
          setQuery((e.target as HTMLInputElement).value)}
        onKeyPress={(e) => handleKeyPress(e)}
        class="p-2 w-full border-2 border-yellow-300 rounded-md text-lg mt-4 text-center duration-300 focus:(outline-none border-yellow-400)"
      />
      <button
        onClick={() => setPressToggle(!pressToggle)}
        class="bg-yellow-300 py-2 px-4 rounded-md duration-300 shadow-md text-lg mt-4 hover:(shadow-lg) focus:(shadow-lg outline-none)"
      >
        Search
      </button>

      {result.includes("No dinosaurs found!") ||
          result.includes("What are you waiting for? Search now 🦕")
        ? (
          <div class="w-4/5 md:(w-full)">
            <p class="italic text-base mt-4 text-center w-full px-2">
              {result[0]}
            </p>
            <div
              class="flex flex-col items-center justify-center w-full mt-5"
            >
              <p class="w-full text-left text-lg font-bold -mb-4">
                🔖 Bookmarked
              </p>
              {bookmarked.length > 0
                ? (
                  <div class="w-full">
                    {bookmarked.map((name) => <Info name={name} />)}
                  </div>
                )
                : (
                  <p class="w-full text-left text-base mt-4">
                    No bookmarks yet!
                  </p>
                )}
              <p class="w-full text-left text-lg font-bold -mb-4 mt-10">
                🦕 Suggested
              </p>
              <div class="w-full">
                {suggested.map((name) => <Info name={name} />)}
              </div>
            </div>
          </div>
        )
        : (
          <div
            class="flex flex-col items-center justify-center w-4/5 md:(w-full)"
          >
            {result.map((name) => <Info name={name} />)}
          </div>
        )}
    </div>
  );
};

export default Search;
