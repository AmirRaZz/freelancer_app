import useProjects from "@/hooks/useProjects";
import Table from "@/ui/Table";
import Loading from "@/ui/Loading";
import Empty from "@/ui/Empty";
import { ProjectType } from "@/features/projects/ProjectTable";
import ProjectRow from "./ProjectRow";

function ProjectsTable() {
  const { projects, isLoading } = useProjects();

  if (isLoading) return <Loading />;

  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project: ProjectType, index: number) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
