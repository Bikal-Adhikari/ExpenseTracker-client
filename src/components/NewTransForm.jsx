import { useState } from "react";
import { CustomInput, CustomSelect } from "./CustomInput";
import { Button, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { postNewTrans } from "../helpers/axiosHelper";

const NewTransForm = ({ getUserTransactions, setShowForm }) => {
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
    const { status, message } = await postNewTrans(form);
    toast[status](message);
    status === "success" && getUserTransactions() && setShowForm(false);
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
        <Col>
          {inputs.map(({ elmType, ...item }, i) =>
            elmType === "select" ? (
              <CustomSelect key={i} {...item} onChange={handleOnChange} />
            ) : (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            )
          )}
          <Button variant="primary" type="submit" className="w-100">
            Add Transaction
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default NewTransForm;
