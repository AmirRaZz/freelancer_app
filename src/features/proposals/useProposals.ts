import { getProposalsApi } from "@/services/proposalService";
import { useQuery } from "@tanstack/react-query";

export default function useProposals() {
  const { data, isLoading } = useQuery({
    queryKey: ["proposals"],
    queryFn: getProposalsApi,
  });

  const { proposals } = data || {};
  return { isLoading, proposals };
}
