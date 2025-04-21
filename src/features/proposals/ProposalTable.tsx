import Loading from "@/ui/Loading";
import useProposals from "./useProposals";
import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import { ProposalType } from "../project/ProposalsTable";
import ProposalRow from "./ProposalRow";

function ProposalTable() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading />;

  if (!proposals.length) return <Empty resourceName="پروپوزال" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal: ProposalType, index: number) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalTable;
