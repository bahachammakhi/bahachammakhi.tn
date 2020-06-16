import {
  axiosPost,
  axiosGet,
  axiosPatch,
  axiosDelete,
  Response,
  axiosPut,
} from "./http";

export const getPeople = (): Promise<Response<any>> => axiosGet("/people");
