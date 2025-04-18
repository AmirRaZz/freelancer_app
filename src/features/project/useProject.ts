import { getProjectApi } from "@/services/projectService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export default function useProject() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getProjectApi(id as string),
    retry: false,
  });

  const { project } = data || {};

  return { project, isLoading };
}
