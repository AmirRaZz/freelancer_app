import DashboardHeader from "@/ui/DashboardHeader";
import useProposals from "../proposals/useProposals";
import Loading from "@/ui/Loading";
import useUsers from "./useUsers";
import Stats from "./Stats";
import useProjects from "@/hooks/useProjects";

function DashboardLayout() {
  const { isLoading: loadProposal, proposals } = useProposals();
  const { isLoading: loadProject, projects } = useProjects();
  const { isLoading: loadUsers, users } = useUsers();

  if (loadProject || loadProposal || loadUsers) return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Stats
        projects={projects.length}
        proposal={proposals.length}
        users={users.length}
      />
    </div>
  );
}

export default DashboardLayout;
