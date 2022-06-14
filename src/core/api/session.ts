import axios from "axios";
import {
  addSessionsRoute,
  deleteSessionRoute,
  getSessionsRoute,
} from "./routes";
import ISession from "../interfaces/session.interface";

interface IGetResponse {
  message: string;
  data: ISession[];
}

interface IAddResponse {
  message: string;
  data: ISession;
}

interface IDeleteResponse {
  message: string;
}

export default class SessionApi {
  async get(): Promise<IGetResponse | null> {
    try {
      const res = await axios.get(getSessionsRoute);
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

  async add(
    myRange: string,
    myQTH: string,
    callSign: string,
    name: string,
    QTH: string,
    signal: string
  ): Promise<IAddResponse | null> {
    try {
      const res = await axios.post(addSessionsRoute, {
        myRange,
        myQTH,
        callSign,
        name,
        QTH,
        signal,
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
      const res = await axios.delete(
        deleteSessionRoute.replace(":id", String(id))
      );
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
