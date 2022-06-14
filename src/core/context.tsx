import { createContext } from "react";
import ICommonContext from "./interfaces/context.interface";

const CommonContext = createContext<ICommonContext | null>(null);

export default CommonContext;
