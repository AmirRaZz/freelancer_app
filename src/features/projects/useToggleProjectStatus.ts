import { useMutation } from "@tanstack/react-query";
import { toggleProjectStatusApi } from "@/services/projectService";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export default function useToggleProjectStatus() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: toggleProjectStatus } = useMutation({
    mutationFn: toggleProjectStatusApi,
    onSuccess({ message }) {
      toast.success(message);

      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      const axiosError = err as AxiosError<{ message: string }>;
      toast.error(axiosError.response?.data?.message || "An error occurred");
    },
  });

  return { isUpdating, toggleProjectStatus };
};
