import { useEffect, useState } from "preact/hooks";
import DINOLIST from "../utils/dinolist.ts";

interface DinoProps {
  name: string;
}

const Dino = ({ name }: DinoProps) => {
  const [diet, setDiet] = useState("");
  const [period, setPeriod] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [length, setLength] = useState("");
  const [taxonomy, setTaxonomy] = useState("");
  const [namedBy, setNamedBy] = useState("");
  const [species, setSpecies] = useState("");
  const [link, setLink] = useState("");
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    getBookmarked();
    getInfo();
  }, []);

  const getBookmarked = () => {
    const stored = JSON.parse(localStorage.getItem(name)!);
    if (stored === null) setBookmarked(false);
    else setBookmarked(stored);
  };

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
    localStorage.setItem(name, JSON.stringify(!bookmarked));
  };

  const getInfo = () => {
    let index = 0;
    for (let i = 0; i < DINOLIST.length; i++) {
      if (DINOLIST[i].includes(name.toLowerCase())) {
        index = i;
        break;
      }
    }

    const dinoInfo = DINOLIST[index].map((info) => {
      if (info === "") return "NIL";
      return info.charAt(0).toUpperCase() + info.slice(1);
    });

    setDiet(dinoInfo[1]);
    setPeriod(dinoInfo[2]);
    setLocation(dinoInfo[3]);
    setType(dinoInfo[4]);
    setLength(dinoInfo[5]);
    setTaxonomy(dinoInfo[6]);
    setNamedBy(dinoInfo[7]);
    setSpecies(dinoInfo[8]);
    setLink(dinoInfo[9]);
  };

  return (
    <div class="md:(w-3/5) w-4/5">
      <h1 class="md:(text-5xl) text-4xl font-bold text-center">{name}</h1>

      <table class="mt-10 w-full">
        <tr>
          <td
            rowSpan={1}
            class="w-1/3 text-lg bg-yellow-200 pl-2 font-bold"
          >
            Period
          </td>
          <td class="w-2/3 text-lg bg-yellow-200 pr-2">{period}</td>
        </tr>
        <tr>
          <td rowSpan={1} class="w-1/3 text-lg pl-2 font-bold">
            Diet
          </td>
          <td class="w-2/3 text-lg pr-2">{diet}</td>
        </tr>
        <tr>
          <td
            rowSpan={1}
            class="w-1/3 text-lg bg-yellow-200 pl-2 font-bold"
          >
            Location
          </td>
          <td class="w-2/3 text-lg bg-yellow-200 pr-2">{location}</td>
        </tr>
        <tr>
          <td rowSpan={1} class="w-1/3 text-lg pl-2 font-bold">
            Type
          </td>
          <td class="w-2/3 text-lg pr-2">{type}</td>
        </tr>
        <tr>
          <td
            rowSpan={1}
            class="w-1/3 text-lg bg-yellow-200 pl-2 font-bold"
          >
            Length
          </td>
          <td class="w-2/3 text-lg bg-yellow-200 pr-2">{length}</td>
        </tr>
        <tr>
          <td rowSpan={1} class="w-1/3 text-lg pl-2 font-bold">
            Taxonomy
          </td>
          <td class="w-2/3 text-lg pr-2">{taxonomy}</td>
        </tr>
        <tr>
          <td
            rowSpan={1}
            class="w-1/3 text-lg bg-yellow-200 pl-2 font-bold"
          >
            Named By
          </td>
          <td class="w-2/3 text-lg bg-yellow-200 pr-2">{namedBy}</td>
        </tr>
        <tr>
          <td rowSpan={1} class="w-1/3 text-lg pl-2 font-bold">
            Species
          </td>
          <td class="w-2/3 text-lg pr-2">{species}</td>
        </tr>
      </table>

      <div class="mt-10 w-full flex flex-row justify-between">
        <p class="text-lg text-left">
          Learn more{" "}
          <a
            href={link}
            target="_blank"
            class="text-yellow-500 hover:(text-underline)"
          >
            here
          </a>{" "}
          🦕
        </p>
        <img
          src={bookmarked ? "/bookmarked.png" : "unbookmarked.png"}
          width="30"
          height="30"
          alt="Bookmarked"
          class="cursor-pointer"
          onClick={() => toggleBookmark()}
        />
      </div>
    </div>
  );
};

export default Dino;
