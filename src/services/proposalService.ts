import http from "./httpService";

export const changeProposalStatusApi = ({
  proposalId,
  ...data
}: {
  proposalId: string;
  status: number;
  projectId: string;
}) => {
  return http
    .patch(`/proposal/${proposalId}`, data)
    .then(({ data }) => data.data);
};

export const getProposalsApi = () => {
  return http.get(`/proposal/list`).then(({ data }) => data.data);
}

export const createProposalApi = (data:{
  description: string;
  price: number;
  duration: number;
  projectId: string;
}) => {
  return http.post(`/proposal/add`, data).then(({ data }) => data.data);
};
