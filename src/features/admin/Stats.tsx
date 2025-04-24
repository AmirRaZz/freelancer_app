import Stat from "@/ui/Stat";
import { HiCollection, HiOutlineViewGrid } from "react-icons/hi";
import { HiUser } from "react-icons/hi2";

function Stats({
  proposal,
  projects,
  users,
}: {
  proposal: number;
  projects: number;
  users: number;
}) {
  return (
    <div className="grid grid-cols-3 gap-x-8">
      <Stat icon={<HiUser />} title="کاربران" value={users} color="blue" />
      <Stat
        icon={<HiOutlineViewGrid />}
        title="درخواست ها"
        value={proposal}
        color="primary"
      />
      <Stat
        icon={<HiCollection />}
        title="پروژه ها"
        value={projects}
        color="green"
      />
    </div>
  );
}

export default Stats;
