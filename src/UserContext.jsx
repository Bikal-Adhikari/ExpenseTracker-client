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
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    const userStr = localStorage.getItem("user");
    userStr && setLoggedInUser(JSON.parse(userStr));
  }, []);

  useEffect(() => {
    calcChartData();
  }, transactions);

  const getUserTransactions = async () => {
    const { status, message, trans } = await fetchTrans();
    status === "error" ? toast.error(message) : setTransactions(trans);
  };

  const calcChartData = () => {
    const income = transactions.reduce((acc, item) => {
      return item.type === "Income" ? acc + item.amount : acc;
    }, 0);
    const expense = transactions.reduce((acc, item) => {
      return item.type === "Expenses" ? acc + item.amount : acc;
    }, 0);
    const mainData =
      transactions.length > 0
        ? {
            labels: ["Incomes", "Expenses"],
            datasets: [
              {
                label: "2024",
                backgroundColor: [
                  "rgba(0, 150, 0, 1)",
                  "rgba(255, 99, 132, 0.5)",
                ],
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
                data: [income, expense],
              },
            ],
          }
        : {
            labels: ["Incomes", "Expenses"],
            datasets: [
              {
                label: "N/A",
                data: [1, 1],
              },
            ],
          };
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
