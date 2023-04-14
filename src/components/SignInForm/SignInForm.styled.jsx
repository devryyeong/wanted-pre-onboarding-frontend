import styled from "styled-components";
import { COLOR } from "../../utils/colors";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 12px;

  &:hover {
    background-color: #f2e3db;
  }
`;

export const Title = styled.span`
  font-size: 24px;
  padding: 28px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${COLOR.WHITE100};
  width: 100%;
  padding: 10px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 8px 0px;
`;

export const Input = styled.input`
  flex: 1;
  width: 100%;
  padding: 16px 4px;
  margin-bottom: 4px;
  border: 1;
  border-radius: 4px;
  background: none;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  border-radius: 4px;
  padding: 16px 4px;
  background-color: ${COLOR.WHITE};
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonText = styled.div`
  text-align: center;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 14px;
  padding-bottom: 4px;
`;
