import styled from "styled-components";
import { COLOR } from "../../../utils/colors";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 12px;

  &:hover {
    background-color: ${COLOR.BEIGE100};
  }
`;