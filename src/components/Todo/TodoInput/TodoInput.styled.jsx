import styled from "styled-components";
import { COLOR } from "../../../utils/colors";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 24px;
  padding: 28px;
`;

export const Form = styled.form`
  display: flex;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  width: 100%;
  height: 50px;
  border: 1;
  border-radius: 4px;
  background: none;
  ::placeholder {
    color: ${COLOR.GREEN300};
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 4px;
  padding: 16px;
  background-color: ${COLOR.WHITE};
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonText = styled.div`
  text-align: center;
`;