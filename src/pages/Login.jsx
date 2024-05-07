import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { TopNav } from "../components/TopNav";
import { CustomInput } from "../components/CustomInput";
import { useEffect, useState } from "react";
import { userLogin } from "../helpers/axiosHelper";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

const initialData = {
  email: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();
  const { loggedInUser, setLoggedInUser } = useUser();
  const [login, setLogin] = useState(initialData);
  const [resp, setResp] = useState({});

  useEffect(() => {
    loggedInUser?._id && navigate("/dashboard");
  }, [loggedInUser]);

  const inputes = [
    {
      label: "Email address",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
      value: login.email,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*********",
      required: true,
      value: login.password,
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();

    const { status, message, user } = await userLogin(login);
    setResp({ status, message });

    if (status === "success") {
      setLoggedInUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    }
  };
  return (
    <div>
      <TopNav />

      <Container className="main" fluid>
        <Row>
          <Col
            md={6}
            className="bg-primary vh-md-100 p-5 d-flex justify-content-center align-items-center"
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
            <div className="shadow-lg p-5 rounded border w-75 mt-5 mb-5">
              <h2>Login Now</h2>
              <hr />
              {resp?.message && (
                <Alert
                  variant={resp?.status === "success" ? "success" : "danger"}
                >
                  {resp.message}
                </Alert>
              )}
              <Form onSubmit={handelOnSubmit}>
                {inputes.map((item, i) => (
                  <CustomInput key={i} {...item} onChange={handleOnChange} />
                ))}
                <div className="d-grid">
                  <Button type="submit" variant="primary">
                    Login Now
                  </Button>
                </div>
              </Form>
              <p className="text-end mt-3">
                Are you new ? <a href="/signup">Signup</a> Now
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Login;
