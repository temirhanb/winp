import axios from "axios";
import {API_URL} from "../api";

export const fetchFakeItem = async (pages: number = 10, filter: string, skipItems: number = 0) => {
  const {data: {result}} = await axios.get(API_URL +
    `/Stock?${"Take=" + pages}&${"filter=" + filter}&${"skip=" + skipItems}`,
    {headers: {"Authorization": " Basic Y2FuZGlkYXRlOmNhbmRpZGF0ZTMyMQ=="}}
  );
  return result;
};