import React from "react";
import { CustomInput } from "./CustomInput";
import { Button, Col, Form, Row } from "react-bootstrap";

const NewTransForm = () => {
  const inputs = [
    {
      name: "type",
      type: "text",
      placeholder: "type",
      required: true,
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
    <Form className="shadow-lg p-3 border rounded">
      <Row>
        {inputs.map((item, i) => (
          <Col md={2} key={i}>
            <CustomInput {...item} />
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
