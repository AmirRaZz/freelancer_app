import { changeUserStatusApi } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export default function useChangeUserStatus() {
  const { isPending: isUpdating, mutate:changeUserStatus } = useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: ({ message }) => {
      toast.success(message);
    },
    onError: (err) => {
      const axiosError = err as AxiosError<{ message: string }>;
      toast.error(axiosError.response?.data?.message || "An error occurred");
    },
  });

  return { isUpdating, changeUserStatus };
}
