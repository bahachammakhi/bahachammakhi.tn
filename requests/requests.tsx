import {
  axiosPost,
  axiosGet,
  axiosPatch,
  axiosDelete,
  Response,
  axiosPut,
} from "./http";

export const getProjects = (): Promise<Response<any>> => axiosGet("/projects");
