import React from 'react';
import styled from "@emotion/styled";
import { getIssue } from '../apis/issue';

const Main = () => {
  const handleTemp = () => {
    console.log("A")
  }
  return (
    <>
      <Container>
        <Title onClick={handleTemp}>#11 issue title</Title>
        <ContentsContainer>
          <BottomContainer>
            <Author>AUTHOR: devryyeong</Author>
            <span style={{ padding: "6px" }}></span>
            <Date>2022-02-11</Date>
          </BottomContainer>
          <Comment>COMMENT: 1</Comment>
        </ContentsContainer>
      </Container>
      <Container>
        <Title onClick={handleTemp}>#11 issue title</Title>
        <ContentsContainer>
          <BottomContainer>
            <Author>AUTHOR: devryyeong</Author>
            <span style={{ padding: "6px" }}></span>
            <Date>2022-02-11</Date>
          </BottomContainer>
          <Comment>COMMENT: 1</Comment>
        </ContentsContainer>
      </Container>
      <Container>
        <Title onClick={handleTemp}>#11 issue title</Title>
        <ContentsContainer>
          <BottomContainer>
            <Author>AUTHOR: devryyeong</Author>
            <span style={{ padding: "6px" }}></span>
            <Date>2022-02-11</Date>
          </BottomContainer>
          <Comment>COMMENT: 1</Comment>
        </ContentsContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 10px;
  padding: 12px;
  border-bottom: 1px solid;
  border-color: gray;
`;

const ContentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const BottomContainer = styled.div`
  display: flex;
`

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Author = styled.div`
  font-size: 12px;
  color: gray;
`;

const Date = styled.div`
  font-size: 12px;
  color: gray;
`;

const Comment = styled.div`
  font-size: 12px;
  color: gray;
`;

export default Main;
// title, number, author, date, comment