import http from "./httpService";

export const getOwnerProjectsApi = () => {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
};

export const removeProjectApi = (id: string) => {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
};

export const createProjectApi = (data: {
  title: string;
  description: string;
  budget: number;
  category: string;
  tags: string[];
  deadline: string;
}) => {
  return http.post(`/project/add`, data).then(({ data }) => data.data);
};
