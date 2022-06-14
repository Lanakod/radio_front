import { FC, useContext, useState } from "react";
import ISession from "../core/interfaces/session.interface";
import SessionApi from "../core/api/session";
import { toast } from "react-toastify";
import CommonContext from "../core/context";
import moment from "moment";

interface ICardData {
  myRange: string;
  myQTH: string;
  callSign: string;
  name: string;
  QTH: string;
  signal: string;
  id: number;
}

interface Props {
  data: ISession;
}

const SessionCard: FC<Props> = ({ data }) => {
  const ctx = useContext(CommonContext);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { QTH, myQTH, myRange, signal, name, callSign, id, createdAt } = data;

  const deleteCard = async () => {
    const api = new SessionApi();
    setButtonDisabled(true);
    const res = await api.delete(id);
    if (res) {
      ctx?.setSessions(ctx?.sessions.filter((s) => s.id !== id));
      toast.success(res.message, {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        closeOnClick: true,
        draggable: true,
      });
      setButtonDisabled(false);
    }
  };

  return (
    <div className="flex flex-col border-2 border-gray-400 rounded p-4 items-center">
      <div className="flex gap-2 items-center justify-center">
        <p>{myRange}</p>
        <hr className="h-6 border-r-2 border-gray-400" />
        <p>{myQTH}</p>
      </div>
      <hr className="w-full border-t-2 border-gray-400 my-4" />
      <div className="flex gap-2 items-center justify-center">
        <p>{callSign}</p>
        <hr className="h-6 border-r-2 border-gray-400" />
        <p>{name}</p>
        <hr className="h-6 border-r-2 border-gray-400" />
        <p>{QTH}</p>
        <hr className="h-6 border-r-2 border-gray-400" />
        <p>{signal}</p>
        <hr className="h-6 border-r-2 border-gray-400" />
        <p>{moment(createdAt).format("YYYY-MM-DD HH:mm:ss")}</p>
      </div>
      <hr className="w-full border-t-2 border-gray-400 my-4" />
      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <i className="bi bi-plus-circle "></i>
        </span>
        <button
          className="border-2 border-gray-400 rounded p-1 pl-7 hover:border-gray-500 relative"
          onClick={(e) => deleteCard()}
          disabled={buttonDisabled}
        >
          Удалить
        </button>
      </label>
    </div>
  );
};

export default SessionCard;
