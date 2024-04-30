import axios from "axios";

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const userEP = rootAPI + "/users";
const userLoginEp = userEP + "/login";

export const postNewUser = async (userObj) => {
  try {
    const { data } = await axios.post(userEP, userObj);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const postUser = async (userObj) => {
  try {
    const { data } = await axios.post(userLoginEp, userObj);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
