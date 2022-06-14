import { FC, useContext, useState } from "react";
import Input from "./Input";
import CommonContext from "../core/context";
import Select from "./Select";
import SessionApi from "../core/api/session";
import { toast } from "react-toastify";

const Form: FC = () => {
  const ctx = useContext(CommonContext);

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const AddSession = async () => {
    const api = new SessionApi();
    if (
      ctx?.selectedRange &&
      ctx?.selectedQTH &&
      ctx?.callSign &&
      ctx?.name &&
      ctx?.QTH &&
      ctx?.signal
    ) {
      setButtonDisabled(true);
      const res = await api.add(
        ctx?.selectedRange,
        ctx?.selectedQTH,
        ctx?.callSign,
        ctx?.name,
        ctx?.QTH,
        ctx?.signal
      );
      if (res) {
        ctx?.setSessions([...ctx?.sessions, res.data]);
        toast.success(res.message, {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
          closeOnClick: true,
          draggable: true,
        });
      }
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
      <div className="flex justify-evenly items-center gap-2">
        <Select
          setSelected={ctx?.setSelectedRange}
          selected={ctx?.selectedRange}
          data={ctx?.myRange}
          text="Диапазон"
          defaultValue="Выберите диапазон"
        />
        <Select
          setSelected={ctx?.setSelectedQTH}
          selected={ctx?.selectedQTH}
          data={ctx?.myQTH}
          text="QTH"
          defaultValue="Выберите QTH"
        />
      </div>
      <hr className="w-full border-t-2 border-gray-400 my-4" />
      <div className="flex flex-col lg:flex-row lg:justify-evenly items-center gap-2">
        <Input
          text="Позывной"
          value={ctx?.callSign}
          setValue={ctx?.setCallSign}
        />
        <Input text="Имя" value={ctx?.name} setValue={ctx?.setName} />
        <Input text="QTH" value={ctx?.QTH} setValue={ctx?.setQTH} />
        <Input text="Сигнал" value={ctx?.signal} setValue={ctx?.setSignal} />
      </div>
      <hr className="w-full border-t-2 border-gray-400 my-4" />
      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <i className="bi bi-plus-circle "></i>
        </span>
        <button
          className="border-2 border-gray-400 rounded p-1 pl-7 hover:border-gray-500 relative"
          onClick={(e) => AddSession()}
          disabled={buttonDisabled}
        >
          Добавить
        </button>
      </label>
    </div>
  );
};

export default Form;
