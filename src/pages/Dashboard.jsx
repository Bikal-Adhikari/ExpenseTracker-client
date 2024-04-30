import { Container } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { TopNav } from "../components/TopNav";

const Dashboard = ({ loggedInUser }) => {
  return (
    <div>
      <TopNav loggedInUser={loggedInUser} />
      {/* mainbody */}
      <Container className="main pt-3">
        <h4>Dashboard | Welcome Back {loggedInUser?.name}</h4>
        <hr />
      </Container>
      <Footer />
    </div>
  );
};

export default Dashboard;
