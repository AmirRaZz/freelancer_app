import { getOtp } from "@/services/authService";
import TextField from "@/ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import Loading from "@/ui/Loading";

function SendOTPForm({ setStep }: { setStep: (step: number) => void }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isPending, mutateAsync: sendOtp } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await sendOtp({ phoneNumber });
      setStep(2);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError.response?.data?.message || "An error occurred");
    }
  };
  return (
    <div>
      <form className="space-y-8" onSubmit={sendOtpHandler}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <div>
          {isPending ? (
            <Loading size={20}/>
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
