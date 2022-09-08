/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect, useState } from "preact/hooks";

interface InfoProps {
  name: string;
}

const Info = ({ name }: InfoProps) => {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(name)!);
    if (stored === null) setBookmarked(false);
    else setBookmarked(stored);
  }, []);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
    localStorage.setItem(name, JSON.stringify(!bookmarked));
  };

  return (
    <div
      class={tw`mt-6 shadow-md border rounded-md border-transparent w-full p-4 duration-300 hover:(shadow-lg) focus:(shadow-lg outline-none) flex md:(flex-row) flex-col cursor-pointer`}
    >
      <a class={tw`w-full`} href={name}>
        <p class={tw`font-bold text-lg`}>{name}</p>
        <p class={tw`text-base mt-2`}>Learn More ➡</p>
      </a>
      <div
        class={tw`md:(mt-0 w-1/12 h-8 w-8) mt-2 flex justify-end`}
        onClick={() => toggleBookmark()}
      >
        <img
          src={bookmarked ? "/bookmarked.png" : "unbookmarked.png"}
          width="20"
          height="20"
          alt="Bookmarked"
        />
      </div>
    </div>
  );
};

export default Info;
