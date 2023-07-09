import { bind } from "@react-rxjs/core";
import { createSignal } from "@react-rxjs/utils";
import { map } from "rxjs";

const [textChange$, setText] = createSignal<string>();
const [useText, text$] = bind<string>(textChange$, "");

const [useCharCount] = bind<number>(
  text$.pipe(map((text: string) => text.length))
);

export const TextInput = () => {
  const text = useText();

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export const CharacterCount = () => {
  const count = useCharCount();

  return <>Character count: {count}</>;
};
