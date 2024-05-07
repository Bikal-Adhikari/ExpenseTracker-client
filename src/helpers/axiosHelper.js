import axios from "axios";

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const userEP = rootAPI + "/users";
const transEP = rootAPI + "/transactions";
const userLoginEp = userEP + "/login";

const getUserId = () => {
  const userStr = localStorage.getItem("user");
  const userObj = userStr ? JSON.parse(userStr) : null;
  return userObj?._id ?? null;
};

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
    const userId = getUserId();
    if (!userId) {
      throw new Error("User id doesn't exist! Login and try again");
    }

    const { data } = await axios.post(transEP, transObj, {
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const fetchTrans = async () => {
  try {
    const userId = getUserId();
    if (!userId) {
      throw new Error("User id doesn't exist! Login and try again");
    }

    const { data } = await axios.get(transEP, {
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const deleteTrans = async (idsToDelete) => {
  try {
    const userId = getUserId();
    if (!userId) {
      throw new Error("User id doesn't exist! Login and try again");
    }

    const { data } = await axios.delete(transEP, {
      data: idsToDelete,
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
