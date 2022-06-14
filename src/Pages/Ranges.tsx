import React, { FC, useContext } from "react";
import SessionCard from "../components/SessionCard";
import Menu from "../components/Menu";
import CommonContext from "../core/context";
import RangeCard from "../components/RangeCard";
import AddRange from "../components/AddRange";
import ICommonContext from "../core/interfaces/context.interface";

interface Props {
  ctx: ICommonContext | null;
}

const Ranges: FC<Props> = ({ ctx }) => {
  return (
    <div className="flex flex-col gap-4 items-center bg-gray-200 h-[100vh]">
      <Menu />
      <AddRange ctx={ctx} />
      <div className="flex flex-col gap-4">
        {ctx?.myRange.length ? (
          ctx?.myRange.map((d) => (
            <RangeCard key={Math.random() * Date.now()} data={d} />
          ))
        ) : (
          <p>Пусто</p>
        )}
      </div>
    </div>
  );
};

export default Ranges;
