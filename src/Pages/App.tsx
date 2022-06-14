import React, { FC, useContext, useEffect, useState } from "react";
import Form from "../components/Form";
import SessionCard from "../components/SessionCard";
import Menu from "../components/Menu";
import CommonContext from "../core/context";
import ICommonContext from "../core/interfaces/context.interface";

interface Props {
  ctx: ICommonContext | null;
}

const App: FC<Props> = ({ ctx }) => {
  const [search, setSearch] = useState<any[]>([]);

  useEffect(() => {
    if (ctx?.callSign.trim() !== "" && ctx?.sessions)
      setSearch(
        ctx?.sessions.filter((d) =>
          d.callSign
            .toLowerCase()
            .includes(ctx?.callSign.toLowerCase() as string)
        )
      );
    else setSearch([]);
  }, [ctx?.callSign]);

  return (
    <div className="flex flex-col gap-4 items-center">
      <Menu />
      <Form />
      <div className="flex flex-col gap-4">
        {search.map((d) => (
          <SessionCard key={Math.random() * Date.now()} data={d} />
        ))}
      </div>
    </div>
  );
};

export default App;
