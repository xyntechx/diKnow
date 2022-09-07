/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface InfoProps {
  name: string;
}

const Info = ({ name }: InfoProps) => {
  return (
    <a
      class={tw`mt-6 shadow-md border rounded-md border-transparent w-full p-4 duration-300 hover:(shadow-lg) focus:(shadow-lg outline-none)`}
      href={name}
    >
      <p class={tw`font-bold text-lg`}>{name}</p>
      <p class={tw`text-base mt-2`}>Learn More ➡</p>
    </a>
  );
};

export default Info;
