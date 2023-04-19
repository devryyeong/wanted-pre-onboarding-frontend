import styled from "styled-components";
import { COLOR } from "../../../utils/colors";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px;
  border-radius: 5px;
  margin-bottom: 1rem;
  cursor: pointer;
  background: ${COLOR.BEIGE100};
`;

export const Todo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #8758ff;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: flex;
  // background-color: olive;
`;

export const LabelWrapper = styled.label`
  display: flex;
`;

export const Input = styled.input`
  label:before {
    border: 2px solid #f47c7c;
    border-radius: 4px;
  }
`;
