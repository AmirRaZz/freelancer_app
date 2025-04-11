function SendOTPForm() {
  return <div>
    <form className="space-y-8">
      <div>
        <label htmlFor="phoneNumber" className="mb-1 block">
          شماره موبایل
        </label>
        <input
          type="text"
          id="phoneNumber"
          className="textField__input"
        />
      </div>
      <button type="submit" className="btn btn--primary w-full">
        ارسال کد تایید
      </button>
    </form>
  </div>;
}

export default SendOTPForm;
