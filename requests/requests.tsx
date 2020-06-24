import {
  axiosPost,
  axiosGet,
  axiosPatch,
  axiosDelete,
  Response,
  axiosPut,
} from "./http";

export const getProjects = (): Promise<Response<any>> => axiosGet("/projects");
export const getProject = (id: string): Promise<Response<any>> =>
  axiosGet(`/projects/${id}`);
export const getSettings = (): Promise<Response<any>> => axiosGet("/settings");
