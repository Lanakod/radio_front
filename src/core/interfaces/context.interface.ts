import { Dispatch } from "react";
import ISession from "./session.interface";
import IQTH from "./qth.interface";
import IRange from "./range.interface";

export default interface ICommonContext {
  callSign: string;
  name: string;
  QTH: string;
  signal: string;

  setCallSign: Dispatch<string>;
  setName: Dispatch<string>;
  setQTH: Dispatch<string>;
  setSignal: Dispatch<string>;

  myQTH: IQTH[];
  myRange: IRange[];

  setMyQTH: Dispatch<IQTH[]>;
  setMyRange: Dispatch<IRange[]>;

  selectedQTH: string;
  selectedRange: string;

  setSelectedQTH: Dispatch<string>;
  setSelectedRange: Dispatch<string>;

  sessions: ISession[];
  setSessions: Dispatch<ISession[]>;
}
