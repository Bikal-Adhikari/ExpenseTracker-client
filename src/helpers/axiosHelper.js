import axios from "axios";

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const userEP = rootAPI + "/users";
const transEP = rootAPI + "/transactions";
const userLoginEp = userEP + "/login";

// #======= user rootAPI ============

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
export const userLogin = async (loginInfo) => {
  try {
    const { data } = await axios.post(userLoginEp, loginInfo);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

// #========= Transaction api ========

export const postNewTrans = async (transObj) => {
  try {
    const { data } = await axios.post(transEP, transObj);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
