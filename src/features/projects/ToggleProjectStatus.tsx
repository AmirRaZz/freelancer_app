import { ProjectType } from "./ProjectTable";
import { useToggleProjectStatus } from "./useToggleProjectStatus";
import Loading from "@/ui/Loading";
import Toggle from "@/ui/Toggle";

function ToggleProjectStatus({ project }: { project: ProjectType }) {
  const { status } = project;
  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({
      id: project._id,
      data: { status: newStatus }
    });
  };


  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading />
      ) : (
        <Toggle
          enabled={status === "OPEN" ? true : false}
          onChange={toggleHandler}
          label={status === "OPEN" ? "باز" : "بسته"}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
