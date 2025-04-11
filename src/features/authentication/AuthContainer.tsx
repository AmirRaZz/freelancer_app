import { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import { getOtp } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

function AuthContainer() {
  const [step, setStep] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState("09181111111");

  const {
    isPending: isSendingOtp,
    mutateAsync: sendOtp,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (
    e?: React.FormEvent<HTMLFormElement> | React.MouseEvent
  ) => {
    if (e && "preventDefault" in e) e.preventDefault();
    try {
      const data = await sendOtp({ phoneNumber });
      if (e && "preventDefault" in e) setStep(2); // Only update step if it's a form submission
      toast.success(data.message);
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="w-full sm:max-w-sm">
      {step === 1 && (
        <SendOTPForm
          onSubmit={sendOtpHandler}
          isSendingOtp={isSendingOtp}
          phoneNumber={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      )}
      {step === 2 && (
        <CheckOTPForm
          phoneNumber={phoneNumber}
          onBack={() => setStep((s) => s - 1)}
          onResendOtp={() => sendOtpHandler()}
          otpResponse={otpResponse}
        />
      )}
    </div>
  );
}

export default AuthContainer;
