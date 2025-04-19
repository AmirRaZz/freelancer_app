import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "@/services/authService";
import { useNavigate } from "react-router";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/auth", { replace: true });
    },
  });

  return { logout, isPending };
}
