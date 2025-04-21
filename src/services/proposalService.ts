import http from "./httpService";

export const changeProposalStatusApi = ({
  proposalId,
  status,
}: {
  proposalId: string;
  status: number;
}) => {
  return http
    .patch(`/proposal/${proposalId}`, { status })
    .then(({ data }) => data.data);
};

export const getProposalsApi = () => {
  return http.get(`/proposal/list`).then(({ data }) => data.data);
}