import { FC, useState } from "react";
import Select from "./Select";
import Input from "./Input";
import SessionApi from "../core/api/session";
import { toast } from "react-toastify";
import RangeApi from "../core/api/range";
import ICommonContext from "../core/interfaces/context.interface";

interface Props {
  ctx: ICommonContext | null;
}

const AddRange: FC<Props> = ({ ctx }) => {
  const [range, setRange] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const addRange = async () => {
    const api = new RangeApi();
    if (range.trim()) {
      setButtonDisabled(true);
      const res = await api.add(range);
      if (res) {
        ctx?.setMyRange([...ctx?.myRange, res.data]);
        toast.success(res.message, {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
          closeOnClick: true,
          draggable: true,
        });
      } else
        toast.error("Ошибка при добавлении диапазона", {
          closeOnClick: true,
        });
    } else
      toast.error("Вы не заполнили необходимые поля", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        closeOnClick: true,
        draggable: true,
      });
    setButtonDisabled(false);
  };

  return (
    <div className="rounded flex flex-col w-fit justify-center items-center border-2 border-gray-400 p-4">
      <div className="flex flex-col lg:flex-row lg:justify-evenly items-center gap-2">
        <Input text="Диапазон" value={range} setValue={setRange} />
      </div>
      <hr className="w-full border-t-2 border-gray-400 my-4" />
      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <i className="bi bi-plus-circle "></i>
        </span>
        <button
          className="border-2 border-gray-400 rounded p-1 pl-7 hover:border-gray-500 relative"
          onClick={(e) => addRange()}
          disabled={buttonDisabled}
        >
          Добавить
        </button>
      </label>
    </div>
  );
};

export default AddRange;
