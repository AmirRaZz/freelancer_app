import AppLayout from "@/ui/AppLayout";
import CustomNavLink from "@/ui/CustomNavLink";
import SideBar from "@/ui/SideBar";
import { HiCollection, HiOutlineViewGrid } from "react-icons/hi";
import { HiHome, HiUser } from "react-icons/hi2";

function AdminLayout() {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavLink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink to="users">
          <HiUser />
          <span>کاربران</span>
        </CustomNavLink>

        <CustomNavLink to="projects">
          <HiOutlineViewGrid />
          <span>پروژه ها</span>
        </CustomNavLink>

        <CustomNavLink to="proposals">
          <HiCollection />
          <span>درخواست ها</span>
        </CustomNavLink>
      </SideBar>
    </AppLayout>
  );
}

export default AdminLayout;
