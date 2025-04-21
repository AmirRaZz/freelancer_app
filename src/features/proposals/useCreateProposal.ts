import { createProposalApi } from "@/services/proposalService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export default function useCreateProposal() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProposal } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: ({ message }) => {
      toast.success(message);

      queryClient.invalidateQueries({ queryKey: ["proposals"] });
    },

    onError: (err) => {
      const axiosError = err as AxiosError<{ message: string }>;
      toast.error(axiosError.response?.data?.message || "An error occurred");
    },
  });

  return { isCreating, createProposal };
}
