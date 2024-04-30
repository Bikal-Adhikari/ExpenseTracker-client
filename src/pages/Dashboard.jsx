import { Container } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { TopNav } from "../components/TopNav";
import { AuthComp } from "../components/AuthComp";

const Dashboard = ({ loggedInUser }) => {
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     return navigate("/");
  //   }, []);
  return (
    <AuthComp loggedInUser={loggedInUser}>
      <TopNav loggedInUser={loggedInUser} />
      {/* mainbody */}
      <Container className="main pt-3">
        <h4>Dashboard | Welcome Back {loggedInUser?.name}</h4>
        <hr />
      </Container>
      <Footer />
    </AuthComp>
  );
};

export default Dashboard;
