import { Button, Col, Container, Row } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { TopNav } from "../components/TopNav";
import { AuthComp } from "../components/AuthComp";
import NewTransForm from "../components/NewTransForm";
import { TransactionTable } from "../components/TransactionTable";

import { CustomModal } from "../components/CustomModal";
import { useUser } from "../UserContext";

const Dashboard = () => {
  const { loggedInUser, setShowForm } = useUser();

  return (
    <AuthComp>
      <TopNav />
      {/* mainbody */}
      <Container className="main pt-3">
        <h4>Dashboard | Welcome Back {loggedInUser?.name}</h4>
        <hr />
        <CustomModal title="Add New Transactions">
          <NewTransForm />
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
            <TransactionTable />
          </Col>
        </Row>
      </Container>
      <Footer />
    </AuthComp>
  );
};

export default Dashboard;
