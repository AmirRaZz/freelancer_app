import { completeProfile } from "@/services/authService";
import Loading from "@/ui/Loading";
import RadioInputGroup from "@/ui/RadioInputGroup";
// import RadioInput from "@/ui/RadioInput";
// import RHFRadioInput from "@/ui/RHFRadioInput";
import RHFTextField from "@/ui/RHFTextField";
// import TextField from "@/ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

type ProfileFormValues = {
  name: string;
  email: string;
  role: string;
};

function CompleteProfileForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProfileFormValues>();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });
  const navigate = useNavigate();

  const onSubmit = async (data: ProfileFormValues) => {
    try {
      const { user, message } = await mutateAsync(data);
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
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <RHFTextField
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            validationSchema={{ required: "این فیلد الزامی است" }}
          />
          <RHFTextField
            label="ایمیل"
            name="email"
            register={register}
            validationSchema={{
              required: "این فیلد الزامی است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل معتبر نیست",
              },
            }}
          />
          <RadioInputGroup
            errors={errors}
            register={register}
            watch={watch}
            configs={{
              name: "role",
              validationSchema: { required: "انتخاب نقش الزامی است" },
              options: [
                { label: "کارفرما", value: "OWNER" },
                { label: "فریلنسر", value: "FREELANCER" },
              ],
            }}
          />

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
