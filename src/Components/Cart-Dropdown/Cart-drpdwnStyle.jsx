import styled from "styled-components";
import {
  BaseButton,
  InvertedButton,
  GoogleButton,
} from "../Button/ButtonStyle";

export const DropdownCont = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},${GoogleButton}, ${InvertedButton} {
    margin-top: auto;
  }
`;

export const Message = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

// .dropdown-container {
//   position: absolute;
//   width: 240px;
//   height: 340px;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 90px;
//   right: 40px;
//   z-index: 5;

//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }

//   .cart-items {
//     height: 250px;
//     display: flex;
//     flex-direction: column;
//     overflow: auto;
//   }

//   button {
//     margin-top: auto;
//   }
// }
