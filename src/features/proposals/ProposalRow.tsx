import Table from "@/ui/Table";
import { ProposalType } from "../project/ProposalsTable";
import truncateText from "@/utils/truncateText";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function ProposalRow({
  proposal,
  index,
}: {
  proposal: ProposalType;
  index: number;
}) {
  const { status, description, duration, price } = proposal;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(description, 60)}</td>
      <td>{toPersianNumbers(duration)} روز</td>
      <td>{toPersianNumbersWithComma(price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
