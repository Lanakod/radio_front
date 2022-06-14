import { Dispatch, FC } from "react";
import IQTH from "../core/interfaces/qth.interface";
import IRange from "../core/interfaces/range.interface";

interface Props {
  data: IQTH[] | IRange[] | undefined;
  text: string;
  defaultValue: string;

  setSelected: Dispatch<string> | undefined;
  selected: string | undefined;
}

const Select: FC<Props> = ({
  data,
  text,
  defaultValue,
  setSelected,
  selected,
}) => {
  return (
    <label className="flex flex-col">
      {text}
      <select
        onChange={(e) => (setSelected ? setSelected(e.target.value) : null)}
        value={selected}
        className="border border-gray-400 rounded hover:border-gray-500 px-2 py-1"
      >
        <option value="">{defaultValue}</option>
        {data
          ? data.map((r) => (
              <option
                key={Math.random() * Date.now()}
                value={"range" in r ? r.range : r.qth}
              >
                {"range" in r ? r.range : r.qth}
              </option>
            ))
          : null}
      </select>
    </label>
  );
};

export default Select;
