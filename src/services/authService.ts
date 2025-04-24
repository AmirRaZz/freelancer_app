import http from "./httpService";

export const getOtp = (data: { phoneNumber: string }) => {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
};

export const checkOtp = (data: { phoneNumber: string; otp: string }) => {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
};

export const completeProfile = (data: {
  name: string;
  email: string;
  role: string;
}) => {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
};

export const getUser = () => {
  return http.get("/user/profile").then(({ data }) => data.data);
};

export const logoutApi = () => {
  return http.post("/user/logout").then(({ data }) => data.data);
};

export const getUsersApi = () => {
  return http.get("/admin/users/list").then(({ data }) => data.data);
};
