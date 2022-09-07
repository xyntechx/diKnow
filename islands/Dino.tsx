/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
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

  useEffect(() => {
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
  }, []);

  return (
    <div class={tw`md:(w-3/5) w-4/5`}>
      <h1 class={tw`md:(text-5xl) text-4xl font-bold text-center`}>{name}</h1>

      <table class={tw`mt-10`}>
        <tr>
          <td
            rowSpan={1}
            class={tw`w-1/3 text-lg bg-yellow-200 pl-2 font-bold`}
          >
            Period
          </td>
          <td class={tw`w-2/3 text-lg bg-yellow-200 pr-2`}>{period}</td>
        </tr>
        <tr>
          <td rowSpan={1} class={tw`w-1/3 text-lg pl-2 font-bold`}>
            Diet
          </td>
          <td class={tw`w-2/3 text-lg pr-2`}>{diet}</td>
        </tr>
        <tr>
          <td
            rowSpan={1}
            class={tw`w-1/3 text-lg bg-yellow-200 pl-2 font-bold`}
          >
            Location
          </td>
          <td class={tw`w-2/3 text-lg bg-yellow-200 pr-2`}>{location}</td>
        </tr>
        <tr>
          <td rowSpan={1} class={tw`w-1/3 text-lg pl-2 font-bold`}>
            Type
          </td>
          <td class={tw`w-2/3 text-lg pr-2`}>{type}</td>
        </tr>
        <tr>
          <td
            rowSpan={1}
            class={tw`w-1/3 text-lg bg-yellow-200 pl-2 font-bold`}
          >
            Length
          </td>
          <td class={tw`w-2/3 text-lg bg-yellow-200 pr-2`}>{length}</td>
        </tr>
        <tr>
          <td rowSpan={1} class={tw`w-1/3 text-lg pl-2 font-bold`}>
            Taxonomy
          </td>
          <td class={tw`w-2/3 text-lg pr-2`}>{taxonomy}</td>
        </tr>
        <tr>
          <td
            rowSpan={1}
            class={tw`w-1/3 text-lg bg-yellow-200 pl-2 font-bold`}
          >
            Named By
          </td>
          <td class={tw`w-2/3 text-lg bg-yellow-200 pr-2`}>{namedBy}</td>
        </tr>
        <tr>
          <td rowSpan={1} class={tw`w-1/3 text-lg pl-2 font-bold`}>
            Species
          </td>
          <td class={tw`w-2/3 text-lg pr-2`}>{species}</td>
        </tr>
      </table>

      <p class={tw`text-lg mt-10 w-full text-right`}>
        Learn more{" "}
        <a
          href={link}
          target="_blank"
          class={tw`text-yellow-500 hover:(text-underline)`}
        >
          here
        </a>{" "}
        🦕
      </p>
    </div>
  );
};

export default Dino;
