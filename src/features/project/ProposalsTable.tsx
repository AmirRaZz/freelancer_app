import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import ProposalRow from "./ProposalRow";

export type ProposalType = {
  _id: string;
  user: { _id: string; name: string };
  description: string;
  duration: number;
  price: number;
  status: number;
};

function ProposalsTable({ proposals }: { proposals: ProposalType[] }) {
  if (!proposals.length) return <Empty resourceName="درخواستی" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index: number) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalsTable;
