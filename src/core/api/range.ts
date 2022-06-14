import axios from "axios";
import { addRangeRoute, deleteRangeRoute, getRangeRoute } from "./routes";
import IRange from "../interfaces/range.interface";

interface IGetResponse {
  message: string;
  data: IRange[];
}

interface IAddResponse {
  message: string;
  data: IRange;
}

interface IDeleteResponse {
  message: string;
}

export default class RangeApi {
  async get(): Promise<IGetResponse | null> {
    try {
      const res = await axios.get(getRangeRoute);
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

  async add(range: string): Promise<IAddResponse | null> {
    try {
      const res = await axios.post(addRangeRoute, {
        range,
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
        deleteRangeRoute.replace(":id", String(id))
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
