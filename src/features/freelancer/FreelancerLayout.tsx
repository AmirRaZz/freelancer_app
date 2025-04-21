import { HiHome, HiCollection } from "react-icons/hi";

import AppLayout from "@/ui/AppLayout";
import CustomNavLink from "@/ui/CustomNavLink";
import SideBar from "@/ui/SideBar";

function FreelancerLayout() {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavLink to="dashboard">
          <HiHome />
          <span>خانه</span>
        </CustomNavLink>

        <CustomNavLink to="projects">
          <HiCollection />
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

export default FreelancerLayout;
