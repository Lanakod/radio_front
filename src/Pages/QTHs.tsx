import React, { FC, useContext } from "react";
import SessionCard from "../components/SessionCard";
import Menu from "../components/Menu";
import CommonContext from "../core/context";
import QTHCard from "../components/QTHCard";
import ICommonContext from "../core/interfaces/context.interface";
import AddQTH from "../components/AddQTH";

interface Props {
  ctx: ICommonContext | null;
}

const QTHs: FC<Props> = ({ ctx }) => {
  return (
    <div className="flex flex-col gap-4 items-center bg-gray-200 h-[100vh]">
      <Menu />
      <AddQTH ctx={ctx} />
      <div className="flex flex-col gap-4">
        {ctx?.myQTH.length ? (
          ctx?.myQTH.map((d) => (
            <QTHCard key={Math.random() * Date.now()} data={d} />
          ))
        ) : (
          <p>Пусто</p>
        )}
      </div>
    </div>
  );
};

export default QTHs;
