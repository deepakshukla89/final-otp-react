// loginReducer.js
import {
  SEND_OTP_REQUEST,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAILURE,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
} from "../../action/actionType.js";

const initialState = {
  loading: false,
  user: null,
  error: null,
  otpSent: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_OTP_REQUEST:
    case VERIFY_OTP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEND_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        otpSent: true,
      };
    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case SEND_OTP_FAILURE:
    case VERIFY_OTP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
