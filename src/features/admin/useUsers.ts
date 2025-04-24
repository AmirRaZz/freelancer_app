import { getUsersApi } from "@/services/authService";
import { useQuery } from "@tanstack/react-query";

export default function useUsers() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsersApi,
  });

  const { users } = data || {};

  return {
    users,
    isLoading,
  };
}
