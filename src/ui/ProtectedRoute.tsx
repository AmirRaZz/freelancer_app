import useAuthorized from "@/features/authentication/useAuthorized";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Loading from "./Loading";
import toast from "react-hot-toast";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isAuthorized, isLoading, isVerified } =
    useAuthorized();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading) {
      toast.error("پروفایل شما هنوز تایید نشده است.");
      navigate("/");
    }
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isLoading, isVerified, navigate]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );

  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
