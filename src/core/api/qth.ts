import axios from "axios";
import { addQTHRoute, deleteQTHRoute, getQTHRoute } from "./routes";
import IQTH from "../interfaces/qth.interface";

interface IGetResponse {
  message: string;
  data: IQTH[];
}

interface IAddResponse {
  message: string;
  data: IQTH;
}

interface IDeleteResponse {
  message: string;
}

export default class QTHApi {
  async get(): Promise<IGetResponse | null> {
    try {
      const res = await axios.get(getQTHRoute);
      const { data: resData } = res;
      const { data, message } = resData;
      return {
        data,
        message,
      };
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async add(qth: string): Promise<IAddResponse | null> {
    try {
      const res = await axios.post(addQTHRoute, {
        qth,
      });
      const { data: resData } = res;
      const { data, message } = resData;
      return {
        data,
        message,
      };
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async delete(id: number): Promise<IDeleteResponse | null> {
    try {
      const res = await axios.delete(deleteQTHRoute.replace(":id", String(id)));
      const { data: resData } = res;
      const { message } = resData;
      return {
        message,
      };
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
