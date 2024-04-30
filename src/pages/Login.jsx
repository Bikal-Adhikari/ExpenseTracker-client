import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { TopNav } from "../components/TopNav";
import { CustomInput } from "../components/CustomInput";
import { useState } from "react";
import { postUser } from "../helpers/axiosHelper";

const initialData = {
  email: "",
  password: "",
};
const Login = () => {
  const [login, setLogin] = useState(initialData);
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

    const data = await postUser(login);
    console.log(data);
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
