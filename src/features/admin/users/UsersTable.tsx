import Table from "@/ui/Table";
import useUsers from "../useUsers";
import Loading from "@/ui/Loading";
import Empty from "@/ui/Empty";
import UserRow from "./UserRow";

export type UserType = {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  role: string;
  status: number;
};

function UsersTable() {
  const { isLoading, users } = useUsers();

  if (isLoading) return <Loading />;

  if (!users.length) return <Empty resourceName="کاربری" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>شماره موبایل</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {users.map((user: UserType, index: number) => (
          <UserRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default UsersTable;
