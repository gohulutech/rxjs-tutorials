import { Subscribe } from "@react-rxjs/core";
import React from "react";
import { TextInput, CharacterCount } from "./TextInput";

export default function App() {
  return (
    <Subscribe>
      <TextInput />
      <CharacterCount />
    </Subscribe>
  );
}
