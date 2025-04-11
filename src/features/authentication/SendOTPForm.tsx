import TextField from "@/ui/TextField";
import Loading from "@/ui/Loading";

function SendOTPForm({
  onSubmit,
  isSendingOtp,
  phoneNumber,
  onChange,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSendingOtp: boolean;
  phoneNumber: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {

  return (
    <div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
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
