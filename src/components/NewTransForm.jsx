import { useState } from "react";
import { CustomInput, CustomSelect } from "./CustomInput";
import { Button, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { postNewTrans } from "../helpers/axiosHelper";

const NewTransForm = () => {
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = await postNewTrans(form);
    toast(data.message);
  };
  const inputs = [
    {
      name: "type",
      placeholder: "type",
      required: true,
      elmType: "select",
      options: [
        {
          value: "income",
          text: "Income",
        },
        {
          value: "expenses",
          text: "Expenses",
        },
      ],
    },
    {
      name: "title",
      type: "text",
      placeholder: "Salary",
      required: true,
    },
    {
      name: "amount",
      type: "number",
      placeholder: "2345",
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
    },
  ];
  return (
    <Form className="shadow-lg p-3 border rounded" onSubmit={handleOnSubmit}>
      <Row>
        {inputs.map(({ elmType, ...item }, i) => (
          <Col md={2} key={i}>
            {elmType === "select" ? (
              <CustomSelect {...item} onChange={handleOnChange} />
            ) : (
              <CustomInput {...item} onChange={handleOnChange} />
            )}
          </Col>
        ))}
        <Col className="mb-3 d-grid">
          <Button variant="primary" type="submit">
            Add Transaction
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default NewTransForm;
