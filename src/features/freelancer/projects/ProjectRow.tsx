import { ProjectType } from "@/features/projects/ProjectTable";
import Table from "@/ui/Table";
import toLocalDateShort from "@/utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import truncateText from "@/utils/truncateText";
import { MdAssignmentAdd } from "react-icons/md";

type ProjectStatusType = {
  [key: string]: {
    label: string;
    className: string;
  };
};

const projectStatus: ProjectStatusType = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSE: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectRow({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) {
  const { status } = project;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <button>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
