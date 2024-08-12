import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, verifyOtp } from "../../action/login/loginAction";
import PhoneNumberInputComponent from "./numberInputComponent";
import OtpVerificationComponent from "./otpVerificationComponent";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, otpSent, user, error } = useSelector((state) => state.login);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSendOtp = () => {
    dispatch(sendOtp("+" + phoneNumber));
  };

  const handleVerifyOtp = () => {
    dispatch(verifyOtp(otp));
  };

  return (
    <section className="bg-emerald-500 flex items-center justify-center h-screen">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="text-center text-white font-medium text-2xl">
            Welcome to my page
          </h2>
        ) : otpSent ? (
          <OtpVerificationComponent
            otp={otp}
            setOtp={setOtp}
            onVerifyOtp={handleVerifyOtp}
            loading={loading}
            error={error}
          />
        ) : (
          <PhoneNumberInputComponent
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            onSendOtp={handleSendOtp}
            loading={loading}
            error={error}
          />
        )}
      </div>
    </section>
  );
};

export default LoginForm;
