/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

interface InfoProps {
  name: string;
}

const Info = ({ name }: InfoProps) => {
  return (
    <div class={tw`mt-4`}>
      <p>{name}</p>
    </div>
  );
};

export default Info;
