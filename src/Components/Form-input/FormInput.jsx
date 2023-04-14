import React from "react";
// import "./FormStyle.scss";
import { Input, Group, FormInputLabel } from "./FormStyle";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group className="group">
      <Input className="form-input" {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}{" "}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
