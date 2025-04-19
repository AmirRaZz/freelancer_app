import AppLayout from "@/ui/AppLayout";
import CustomNavLink from "@/ui/CustomNavLink";
import { HiCollection } from "react-icons/hi";
import SideBar from "@/ui/SideBar";
import { HiHome } from "react-icons/hi";

function OwnerLayout() {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavLink to="/owner/dashboard">
          <HiHome />
          <span>خانه</span>
        </CustomNavLink>

        <CustomNavLink to="/owner/projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
      </SideBar>
    </AppLayout>
  );
}

export default OwnerLayout;
