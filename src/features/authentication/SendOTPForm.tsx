// import TextField from "@/ui/TextField";
import Loading from "@/ui/Loading";
import RHFTextField from "@/ui/RHFTextField";
import { UseFormRegister } from "react-hook-form";

type AuthFormData = {
  phoneNumber: string;
};

function SendOTPForm({
  onSubmit,
  isSendingOtp,
  register,
}: // phoneNumber,
// onChange,
{
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSendingOtp: boolean;
  register: UseFormRegister<AuthFormData>;
  // phoneNumber: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <form className="space-y-8" onSubmit={onSubmit}>
        {/* <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        /> */}
        <RHFTextField<AuthFormData>
          label="شماره موبایل"
          name="phoneNumber"
          register={register}
        />
        <div>
          {isSendingOtp ? (
            <Loading size={20} />
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
