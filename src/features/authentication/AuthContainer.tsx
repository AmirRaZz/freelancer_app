import { useEffect, useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import { getOtp } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router";

type AuthFormData = {
  phoneNumber: string;
};

function AuthContainer() {
  const [step, setStep] = useState(2);
  // const [phoneNumber, setPhoneNumber] = useState("09181111111");
  const { register, handleSubmit, getValues } = useForm<AuthFormData>();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const {
    isPending: isSendingOtp,
    mutateAsync: sendOtp,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler: SubmitHandler<AuthFormData> = async (data) => {
    try {
      const { message } = await sendOtp(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="w-full sm:max-w-sm">
      {step === 1 && (
        <SendOTPForm
          onSubmit={handleSubmit(sendOtpHandler)}
          isSendingOtp={isSendingOtp}
          register={register}
          // onSubmit={sendOtpHandler}
          // phoneNumber={phoneNumber}
          // onChange={(e) => setPhoneNumber(e.target.value)}
        />
      )}
      {step === 2 && (
        <CheckOTPForm
          phoneNumber={getValues("phoneNumber")}
          onBack={() => setStep((s) => s - 1)}
          onResendOtp={sendOtpHandler as () => Promise<void>}
          otpResponse={otpResponse}
        />
      )}
    </div>
  );
}

export default AuthContainer;
