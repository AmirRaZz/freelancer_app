import { checkOtp } from "@/services/authService";
import Loading from "@/ui/Loading";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { HiArrowRight } from "react-icons/hi2";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router";

const RESEND_TIME = 90;

function CheckOTPForm({
  phoneNumber,
  onBack,
  onResendOtp,
  otpResponse,
}: {
  phoneNumber: string;
  onBack: () => void;
  onResendOtp: () => Promise<void>;
  otpResponse: { message: string; user: { isActive: boolean; role: string } };
}) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const { mutateAsync, isPending } = useMutation({
    mutationFn: checkOtp,
  });
  const navigate = useNavigate();

  const checkOtpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        if (user.role === "OWNER") navigate("/owner");
        if (user.role === "FREELANCER") navigate("/freelancer");
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      console.log(error);
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError.response?.data?.message || "An error occurred");
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>
      {otpResponse && (
        <p className="flex items-center gap-x-2">
          <span>{otpResponse.message}</span>
          <button onClick={onBack}>
            <CiEdit className="w-6 h-6 text-primary-900" />
          </button>
        </p>
      )}
      <div className="mb-4 text-secondary-500">
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button
            onClick={async () => {
              await onResendOtp();
              setTime(RESEND_TIME); // Reset timer directly
            }}
          >
            ارسال مجدد کد تایید
          </button>
        )}
      </div>
      <form className="space-y-10" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid var(--color-primary-400)",
            borderRadius: "0.5rem",
          }}
        />
        <div>
          {isPending ? (
            <Loading size={20} />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CheckOTPForm;
