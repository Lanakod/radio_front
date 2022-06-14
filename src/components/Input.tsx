import { Dispatch, FC } from "react";

interface Props {
  text: string;
  value: string | undefined;
  setValue: Dispatch<string> | undefined;
}

const Input: FC<Props> = ({ text, value = "", setValue }) => {
  return (
    <label className="flex flex-col">
      {text}
      <input
        type="text"
        className="rounded border border-gray-400 px-2 py-1"
        value={value}
        onChange={(e) => (setValue ? setValue(e.target.value) : null)}
      />
    </label>
  );
};

export default Input;
