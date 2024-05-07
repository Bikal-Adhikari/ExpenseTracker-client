import { Button, Col, Container, Row } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { TopNav } from "../components/TopNav";
import { AuthComp } from "../components/AuthComp";

import NewTransForm from "../components/NewTransForm";
import { TransactionTable } from "../components/TransactionTable";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchTrans } from "../helpers/axiosHelper";
import { CustomModal } from "../components/CustomModal";

const Dashboard = ({ loggedInUser }) => {
  const [transactions, setTransactions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    getUserTransactions();
  }, []);
  const getUserTransactions = async () => {
    const { status, message, trans } = await fetchTrans();
    status === "error" ? toast.error(message) : setTransactions(trans);
  };
  return (
    <AuthComp loggedInUser={loggedInUser}>
      <TopNav loggedInUser={loggedInUser} />
      {/* mainbody */}
      <Container className="main pt-3">
        <h4>Dashboard | Welcome Back {loggedInUser?.name}</h4>
        <hr />
        <CustomModal
          title="Add New Transactions"
          show={showForm}
          setShowForm={setShowForm}
        >
          <NewTransForm
            getUserTransactions={getUserTransactions}
            setShowForm={setShowForm}
          />
        </CustomModal>
        <Row>
          <Col className="text-end">
            <Button onClick={() => setShowForm(true)}>
              Add New Transaction
            </Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <TransactionTable transactions={transactions} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </AuthComp>
  );
};

export default Dashboard;
