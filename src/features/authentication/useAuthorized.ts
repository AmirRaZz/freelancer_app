import { useLocation } from "react-router";
import useUser from "./useUser";

export default function useAuthorized() {
  const { user, isLoading } = useUser();
  const { pathname } = useLocation();

  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isAuthorized = false;

  let isVerified = false;
  if (user && user.status === 2) isVerified = true;
  // if (pathname.includes("owner")) {
  //   if (user && user.role === "OWNER") isAuthorized = true;
  // }

  // if (pathname.includes("freelancer")) {
  //   if (user && user.role === "FREELANCER") isAuthorized = true;
  // }

  // if (pathname.includes("admin")) {
  //   if (user && user.role === "ADMIN") isAuthorized = true;
  // }

  const ROLES = {
    admin: "ADMIN",
    owner: "OWNER",
    freelancer: "FREELANCER",
  };

  const desiredRole = pathname.split("/").at(1) as keyof typeof ROLES;

  if (Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === ROLES[desiredRole]) isAuthorized = true;
  }

  return { isAuthenticated, isAuthorized, isLoading, isVerified, user };
}
