import React, { FC, useContext } from "react";
import SessionCard from "../components/SessionCard";
import Menu from "../components/Menu";
import CommonContext from "../core/context";
import ICommonContext from "../core/interfaces/context.interface";

interface Props {
  ctx: ICommonContext | null;
}

const List: FC<Props> = ({ ctx }) => {
  return (
    <div className="flex flex-col gap-4 items-center bg-gray-200 h-[100vh]">
      <Menu />
      <div className="flex flex-col gap-4">
        {ctx?.sessions.length ? (
          ctx?.sessions.map((d) => (
            <SessionCard key={Math.random() * Date.now()} data={d} />
          ))
        ) : (
          <p>Пусто</p>
        )}
      </div>
    </div>
  );
};

export default List;
