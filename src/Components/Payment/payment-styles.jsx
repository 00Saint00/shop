import styled from "styled-components";
import Button from "../Button/Button";

export const PaymentContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-weight: 500px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
