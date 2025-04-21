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

export const editProjectApi = ({
  id,
  newProject,
}: {
  id: string;
  newProject: {
    title: string;
    description: string;
    budget: number;
    category: string;
    tags: string[];
    deadline: string;
  };
}) => {
  return http
    .patch(`/project/update/${id}`, newProject)
    .then(({ data }) => data.data);
};

export const toggleProjectStatusApi = ({
  id,
  data,
}: {
  id: string;
  data: { status: string };
}) => {
  return http.patch(`/project/${id}`, data).then(({ data }) => data.data);
};

export const getProjectApi = (id: string) => {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
};

export const getProjectsApi = () => {
  return http.get(`/project/list`).then(({ data }) => data.data);
};
