// loginAction.js
import {
  SEND_OTP_REQUEST,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAILURE,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
} from "../actionType";
import { auth } from "../../firebase/firebase.auth.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast } from "react-hot-toast";

// Action for sending OTP
export const sendOtp = (phoneNumber) => async (dispatch) => {
  dispatch({ type: SEND_OTP_REQUEST });

  try {
    const appVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      { size: "invisible" },
      auth
    );
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier
    );
    window.confirmationResult = confirmationResult;

    dispatch({ type: SEND_OTP_SUCCESS });
    toast.success("OTP sent successfully!");
  } catch (error) {
    dispatch({ type: SEND_OTP_FAILURE, payload: error.message });
    toast.error("Failed to send OTP!");
  }
};

// Action for verifying OTP
export const verifyOtp = (otp) => async (dispatch) => {
  dispatch({ type: VERIFY_OTP_REQUEST });

  try {
    const result = await window.confirmationResult.confirm(otp);
    dispatch({ type: VERIFY_OTP_SUCCESS, payload: result.user });
    toast.success("OTP verified successfully!");
  } catch (error) {
    dispatch({ type: VERIFY_OTP_FAILURE, payload: error.message });
    toast.error("Failed to verify OTP!");
  }
};
