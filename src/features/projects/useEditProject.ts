import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectApi } from "@services/projectService";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
export default function useEditProject() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editProject } = useMutation({
    mutationFn: editProjectApi,
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (err) => {
      const axiosError = err as AxiosError<{ message: string }>;
      toast.error(axiosError.response?.data?.message || "An error occurred");
    },
  });

  return { isEditing, editProject };
}
