import { HiCollection, HiOutlineViewGrid } from "react-icons/hi";
import { ProposalType } from "../project/ProposalsTable";
import { HiCurrencyDollar } from "react-icons/hi2";
import Stat from "@ui/Stat";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";

function Stats({ proposals }: { proposals: ProposalType[] }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter(
    (proposal) => proposal.status === 2
  );
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="grid grid-cols-3 gap-x-8">
      <Stat
        icon={<HiOutlineViewGrid />}
        title="درخواست ها"
        value={numOfProposals}
        color="primary"
      />
      <Stat
        icon={<HiCurrencyDollar />}
        title="درخواست های تایید شده"
        value={acceptedProposals.length}
        color="green"
      />
      <Stat
        icon={<HiCollection />}
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
        color="blue"
      />
    </div>
  );
}

export default Stats;
