import { FC, ReactNode, useState } from "react";
import ICommonContext from "../interfaces/context.interface";
import CommonContext from "../context";
import ISession from "../interfaces/session.interface";
import IQTH from "../interfaces/qth.interface";
import IRange from "../interfaces/range.interface";

interface Props {
  children: ReactNode;
}

const ContextProvider: FC<Props> = ({ children }) => {
  const [callSign, setCallSign] = useState("");
  const [name, setName] = useState("");
  const [QTH, setQTH] = useState("");
  const [signal, setSignal] = useState("");
  const [myQTH, setMyQTH] = useState<IQTH[]>([]);
  const [myRange, setMyRange] = useState<IRange[]>([]);
  const [sessions, setSessions] = useState<ISession[]>([]);
  const [selectedQTH, setSelectedQTH] = useState<string>("");
  const [selectedRange, setSelectedRange] = useState<string>("");

  const data: ICommonContext = {
    callSign,
    name,
    QTH,
    signal,
    myQTH,
    myRange,
    sessions,

    setCallSign,
    setName,
    setQTH,
    setSignal,
    setMyQTH,
    setMyRange,
    setSessions,

    selectedQTH,
    selectedRange,
    setSelectedQTH,
    setSelectedRange,
  };
  return (
    <CommonContext.Provider value={data}>{children}</CommonContext.Provider>
  );
};

export default ContextProvider;
