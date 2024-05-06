import React from "react";
import { CustomInput } from "./CustomInput";
import { Col, Form, Row } from "react-bootstrap";

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
    <Form>
      <Row>
        <Col>
          <CustomInput />
        </Col>
      </Row>
    </Form>
  );
};

export default NewTransForm;
