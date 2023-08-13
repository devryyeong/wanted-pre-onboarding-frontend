import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import styled from "@emotion/styled";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { getIssue, getIssueDetail, getRepoInfo } from "../apis/issue";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import IcChat from '../assets/ic-chat.png';
import { IssueType } from "../types/issue";


const Main: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const [issues, setIssues] = useState<AxiosResponse | any>(null);
  const [page, setPage] = useState(1);

  useInfiniteScroll(() => {
    setPage(page + 1);
  });

  useEffect(() => {
    const fetchIssueList = async (): Promise<void> => {
      try {
        const newIssues = await getIssue("", page);
        setIssues(newIssues);
        
      } catch (error) {
        console.error("Error fetching issues: ", error);
      }
    };

    fetchIssueList();
  }, [page]);

  const handleIssueClick = async (issueNumber: number) => {
    // console.log(issueNumber);
    try {
      const issueDetail = await getIssueDetail(issueNumber);
      console.log(issueDetail.body);
      navigate(`/issues/${issueNumber}`);
    } catch (error) {
      console.error("Error fetching issues: ", error);
    }
  };


  const parseDate = (date: Date) => {
    const dateObject = new Date(date);

    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDay();

    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <>
      {issues &&
        issues?.map((issue: IssueType, index: number) => (
          <Container key={index}>
            <TopContainer>
              <Title onClick={() => {
                handleIssueClick(issue.number);
                console.log("A")
              }}>{issue.title}</Title>
              <CommentContainer>
                <CommentIcon src={IcChat} />
                <Comment>{issue.comments}</Comment>
              </CommentContainer>
            </TopContainer>
            <ContentsContainer>
              <BottomContainer>
                <SubText>
                  #{issue.number} opened on {issue.updated_at} by&nbsp;
                </SubText>
                <UserAvatar src={issue.user.avatar_url} />
                <SubTextBold>&nbsp;{issue.user.login}</SubTextBold>
              </BottomContainer>
            </ContentsContainer>
          </Container>
        ))}
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
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomContainer = styled.div`
  display: flex;
  
`;

const CommentContainer = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  cursor: pointer;
`;

const SubText = styled.div`
  font-size: 12px;
  color: gray;
`;

const SubTextBold = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: gray;
`;

const Comment = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const CommentIcon = styled.img`
  width: 16px;
  height: 16px;
  padding: 0 6px 0 9px;
`;

const UserAvatar = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 8px;
`;

export default Main;
