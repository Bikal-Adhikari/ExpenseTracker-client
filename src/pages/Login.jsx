import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { TopNav } from "../components/TopNav";
import { CustomInput } from "../components/CustomInput";

const Login = () => {
  const inputes = [
    {
      label: "Email address",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*********",
      required: true,
    },
  ];
  return (
    <div>
      <TopNav />

      <Container className="main" fluid>
        <Row>
          <Col
            md={6}
            className="bg-primary vh-100 d-flex justify-content-center align-items-center"
          >
            <div className="text-white shadow-lg rounded p-3">
              <h1>Welcome Back</h1>
              <p>Login to your account and take control of your finance.</p>
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="shadow-lg p-5 rounded border w-75">
              <h2>Login Now</h2>
              <hr />
              <Form>
                {inputes.map((item, i) => (
                  <CustomInput key={i} {...item} />
                ))}
                <div className="d-grid">
                  <Button variant="primary">Login Now</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Login;
