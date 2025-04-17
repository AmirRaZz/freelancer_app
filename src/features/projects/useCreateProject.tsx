import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "@services/projectService";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
export default function useCreateProject() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProject } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (err) => {
      const axiosError = err as AxiosError<{ message: string }>;
      toast.error(axiosError.response?.data?.message || "An error occurred");
    },
  });

  return { isCreating, createProject };
}
