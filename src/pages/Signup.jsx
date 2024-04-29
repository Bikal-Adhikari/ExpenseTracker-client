import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { TopNav } from "../components/TopNav";
import { CustomInput } from "../components/CustomInput";
import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: null,
  password: "",
  confirmPassword: "",
};
const Signup = () => {
  const [form, setForm] = useState(initialState);
  const inputes = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter your Name",
      required: true,
    },
    {
      label: "Email address",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      label: "Phone no. (Optional)",
      name: "Phone",
      type: "number",
      placeholder: "Enter your Number",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*********",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "*********",
      required: true,
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm(initialState);
  };

  return (
    <div>
      <TopNav />

      <Container className="main" fluid>
        <Row>
          <Col
            md={6}
            className="bg-info vh-md-100 p-5 d-flex justify-content-center align-items-center"
          >
            <div className="text-white shadow-lg rounded p-3">
              <h1>Join Our Community</h1>
              <p>Use our application to track your expenses</p>
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="shadow-lg p-5 rounded border w-75 mt-5 mb-5">
              <h2>Signup Now</h2>
              <hr />
              <Form onSubmit={handelOnSubmit}>
                {inputes.map((item, i) => (
                  <CustomInput key={i} {...item} onChange={handleOnChange} />
                ))}
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    SignUp Now
                  </Button>
                </div>
              </Form>
              <p className="text-end mt-3">
                Already have an account ? <a href="/">Login</a> Now
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Signup;
