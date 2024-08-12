import { BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberInputComponent = ({
  phoneNumber,
  setPhoneNumber,
  onSendOtp,
  loading,
  otpError,
}) => {
  return (
    <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
      <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
        Library
      </h1>
      <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
        <BsTelephoneFill size={30} />
      </div>
      <label htmlFor="" className="font-bold text-xl text-white text-center">
        Verify your phone number
      </label>
      <PhoneInput
        country={"in"}
        value={phoneNumber}
        onChange={setPhoneNumber}
      />
      <button
        onClick={onSendOtp}
        className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
        disabled={loading}
      >
        {loading && <CgSpinner size={20} className="mt-1 animate-spin" />}
        <span>Send OTP</span>
      </button>
      {otpError && <p className="text-red-500 text-center">{otpError}</p>}
    </div>
  );
};

export default PhoneNumberInputComponent;
