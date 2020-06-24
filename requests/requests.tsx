import {
  axiosPost,
  axiosGet,
  axiosPatch,
  axiosDelete,
  Response,
  axiosPut,
} from "./http";
export const getArticle = (id: string): Promise<Response<any>> =>
  axiosGet(`/articles/${id}`);
export const getArticles = (): Promise<Response<any>> => axiosGet("/articles");
export const getProjects = (): Promise<Response<any>> => axiosGet("/projects");
export const getProject = (id: string): Promise<Response<any>> =>
  axiosGet(`/projects/${id}`);
export const getSettings = (): Promise<Response<any>> => axiosGet("/settings");
export const postContact = (data: any): Promise<Response<any>> =>
  axiosPost("/contacts", { data });
