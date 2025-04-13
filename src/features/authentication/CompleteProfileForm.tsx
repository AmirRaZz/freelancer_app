import { completeProfile } from "@/services/authService";
import Loading from "@/ui/Loading";
import RadioInput from "@/ui/RadioInput";
import TextField from "@/ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ name, email, role });
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید می باشد", {
          icon: "ℹ️",
        });
        return;
      }
      if (user.role === "OWNER") navigate("/owner");
      if (user.role === "FREELANCER") navigate("/freelancer");
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="ایمیل"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center justify-center gap-x-8">
            <RadioInput
              label="کارفرما"
              name="role"
              id="OWNER"
              value="OWNER"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "OWNER"}
            />
            <RadioInput
              label="فریلنسر"
              name="role"
              id="FREELANCER"
              value="FREELANCER"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "FREELANCER"}
            />
          </div>
          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button className="btn btn--primary w-full">تایید</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
