import { useMutation } from "@tanstack/react-query";
import { changeProposalStatusApi } from "@/services/proposalService";
import { AxiosError } from "axios";
import toast from "react-hot-toast/headless";

export default function useChangeProposalStatus() {
  const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: ({ message }) => {
      toast.success(message);
    },
    onError: (err) => {
      const axiosError = err as AxiosError<{ message: string }>;
      toast.error(axiosError.response?.data?.message || "An error occurred");
    },
  });

  return { isUpdating, changeProposalStatus };
}
