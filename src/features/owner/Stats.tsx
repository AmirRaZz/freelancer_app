import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { ProjectType } from "../projects/ProjectTable";
import Stat from "./Stat";

function Stats({ projects }: { projects: ProjectType[] }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map(
    (project) => Number(project.status) === 2
  ).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid grid-cols-3 gap-x-8">
      <Stat
        icon={<HiOutlineViewGrid />}
        title="پروژه ها"
        value={numOfProjects}
        color="primary"
      />
      <Stat
        icon={<HiCurrencyDollar />}
        title="پروژه های واگذار شده"
        value={numOfAcceptedProjects}
        color="green"
      />
      <Stat
        icon={<HiCollection />}
        title="درخواست ها"
        value={numOfProposals}
        color="blue"
      />
    </div>
  );
}

export default Stats;
