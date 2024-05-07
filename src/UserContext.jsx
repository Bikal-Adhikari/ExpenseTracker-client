import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchTrans } from "./helpers/axiosHelper";

const UserContext = createContext();

//allow any component to consume the data
export const useUser = () => useContext(UserContext);

//Providers data to all components
export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    const userStr = localStorage.getItem("user");
    userStr && setLoggedInUser(JSON.parse(userStr));
  }, []);

  const getUserTransactions = async () => {
    const { status, message, trans } = await fetchTrans();
    status === "error" ? toast.error(message) : setTransactions(trans);
  };
  console.log(showForm);
  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        transactions,
        setTransactions,
        getUserTransactions,
        showForm,
        setShowForm,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
