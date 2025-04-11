import { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";

function AuthContainer() {
  const [step, setStep] = useState(1);
  return (
    <div className="w-full sm:max-w-sm">
      {step === 1 && <SendOTPForm setStep={setStep} />}
      {step === 2 && <CheckOTPForm />}
    </div>
  );
}

export default AuthContainer;
