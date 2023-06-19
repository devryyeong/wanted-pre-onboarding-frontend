import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { COLOR } from "./colors";

export default createGlobalStyle`
  ${reset}
    * {
      box-sizing : border-box;
    }
    body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'Pretendard';
    font-size: 20px;
    background: linear-gradient(
      to bottom,
      ${COLOR.GREEN100},
      ${COLOR.GREEN200},
      ${COLOR.GREEN100}
    );
  }
  
`;

export const MainContainer = styled.div`
  width: 450px;
  height: 100%; //530
  overflow: hidden;
  background: linear-gradient(to bottom, ${COLOR.GREEN100}, ${COLOR.GREEN200}, ${COLOR.GREEN100});
  border-radius: 10px;
  box-shadow: 3px 10px 50px ${COLOR.BLACK100};
  padding: 20px;
`;
