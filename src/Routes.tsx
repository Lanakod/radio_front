import { Link, Route, Routes } from "react-router-dom";
import { FC, useContext, useEffect } from "react";
import App from "./Pages/App";
import List from "./Pages/List";
import SessionApi from "./core/api/session";
import CommonContext from "./core/context";
import { toast } from "react-toastify";
import RangeApi from "./core/api/range";
import QTHApi from "./core/api/qth";
import Ranges from "./Pages/Ranges";
import QTHs from "./Pages/QTHs";

const AppRoutes: FC = () => {
  const ctx = useContext(CommonContext);
  useEffect(() => {
    const fetch = async () => {
      const sessionApi = new SessionApi();
      const sessionRes = await sessionApi.get();
      if (sessionRes) {
        ctx?.setSessions(sessionRes.data);
        toast.success(sessionRes.message, {
          closeOnClick: true,
        });
      } else
        toast.error("Ошибка при получении данных", {
          closeOnClick: true,
        });

      const rangeApi = new RangeApi();
      const rangeRes = await rangeApi.get();
      if (rangeRes) {
        ctx?.setMyRange(rangeRes.data);
        toast.success(rangeRes.message, {
          closeOnClick: true,
        });
      } else
        toast.error("Ошибка при получении данных", {
          closeOnClick: true,
        });

      const qthApi = new QTHApi();
      const qthRes = await qthApi.get();
      if (qthRes) {
        ctx?.setMyQTH(qthRes.data);
        toast.success(qthRes.message, {
          closeOnClick: true,
        });
      } else
        toast.error("Ошибка при получении данных", {
          closeOnClick: true,
        });
    };
    fetch();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<App ctx={ctx} />} />
      <Route path="/list" element={<List ctx={ctx} />} />
      <Route path="/ranges" element={<Ranges ctx={ctx} />} />
      <Route path="/qths" element={<QTHs ctx={ctx} />} />
      <Route
        path="*"
        element={
          <div className="flex flex-col justify-center items-center h-[100vh]">
            <h1>Not Found | 404</h1>
            <Link to="/">Go home</Link>
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
