import Loading from "@ui/Loading";
import useOwnerProjects from "./useOwnerProjects";
import Empty from "@ui/Empty";
import Table from "@/ui/Table";
import ProjectRow from "./ProjectRow";

export type ProjectType = {
  _id: string;
  title: string;
  description: string;
  category: {
    _id: string;
    title: string;
  };
  budget: number;
  deadline: string;
  tags: string[];
  freelancer: {
    name: string;
  };
  status: string;
};

function ProjectTable() {
  const { projects, isLoading } = useOwnerProjects();

  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th>درخواست ها</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project: ProjectType, index: number) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
