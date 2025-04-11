import http from "./httpService";

export const getOtp = (data: { phoneNumber: string }) => {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
};

export const checkOtp = (data: { phoneNumber: string; otp: string }) => {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
};
