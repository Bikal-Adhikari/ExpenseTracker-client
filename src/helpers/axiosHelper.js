import axios from "axios";

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const userEP = rootAPI + "/user";

export const postNewUser = (userObj) => {
  try {
    const { data } = axios.post(userEP, userObj);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
