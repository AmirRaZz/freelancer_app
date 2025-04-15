import Table from "@/ui/Table";
import truncateText from "@utils/truncateText";
import toLocalDateShort from "@utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "@utils/toPersianNumbers";
import { Project } from "./ProjectTable";

function ProjectRow({ index, project }: { index: number; project: Project }) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap gap-2 max-w-[200px]">
          {project.tags.map((tag: string) => (
            <span key={tag} className="badge badge--secondary">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
      </td>
      <td>...</td>
    </Table.Row>
  );
}

export default ProjectRow;
