import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { TopNav } from "../components/TopNav";
import { CustomInput } from "../components/CustomInput";
import { useState } from "react";
import { postNewUser } from "../helpers/axiosHelper";

const initialState = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};
const Signup = ({ loggedInUser }) => {
  const [form, setForm] = useState(initialState);
  const [resp, setResp] = useState({});
  const inputes = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter your Name",
      required: true,
      value: form.name,
    },
    {
      label: "Email address",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
      value: form.email,
    },
    {
      label: "Phone no. (Optional)",
      name: "phone",
      type: "number",
      placeholder: "Enter your Number",
      value: form.phone,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*********",
      required: true,
      value: form.password,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "*********",
      required: true,
      value: form.confirmPassword,
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("Passwords do not match");
    }

    const data = await postNewUser(rest);
    console.log(data);
    setResp(data);
    data.status === "success" && setForm(initialState);
  };

  return (
    <div>
      <TopNav loggedInUser={loggedInUser} />

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
