import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import styled from "@emotion/styled";
import { getIssue } from '../apis/issue';
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import IcChat from '../assets/ic-chat.png';

interface IssueType {
  title: string;
  number: number;
  user: {
    login: string;
    url: string;
    avatar_url: string;
  }
  created_at: string;
  comments: number;
}

const Main: React.FC = () => {
  const [issues, setIssues] = useState<AxiosResponse | any>(null);
  const [page, setPage] = useState(1);

  useInfiniteScroll(() => {
    setPage(page + 1);
  });
  
  useEffect(() => {
    const fetchIssues = async ():Promise<void> => {
      try {
        const newIssues = await getIssue("", page);
        setIssues(newIssues);
        console.log(issues);
      } catch (error) {
        console.error("Error fetching issues: ", error);
      }
    };

    fetchIssues();
  }, [page]);

  const handleTemp = () => {
    console.log("A");
  };

  // const parseDate = (date: string | any): string => {
  //   const parsedDate: any = typeof date === 'string' ? new Date(date) : date;
  //   const options = { year: "numeric", month: "short", day: "numeric" };
  //   return parsedDate.toLocaleDateString("en-US", options);
  // }

  return (
    <>
      {issues && issues?.map((issue: IssueType, index: number) => (
        <Container key={index}>
          <TopContainer>
            <Title onClick={handleTemp}>{issue.title}</Title>
            <CommentContainer>
              <CommentIcon src={IcChat} />
              <Comment>{issue.comments}</Comment>
            </CommentContainer>
          </TopContainer>
          <ContentsContainer>
            <BottomContainer>
              <Author>
                #{issue.number} opened on {issue.created_at} by&nbsp;
              </Author>
              <UserAvatar src={issue.user.avatar_url} />
              <Author>&nbsp;{issue.user.login}</Author>
              <span style={{ padding: "6px" }}></span>
            </BottomContainer>
          </ContentsContainer>
        </Container>
      ))}
    </>
  );
};

const UserAvatar = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 8px;
`;
const CommentContainer = styled.div`
  display: flex;
`;
const CommentIcon = styled.img`
  width: 16px;
  height: 16px;
`;
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

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

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

const Comment = styled.div`
  font-size: 12px;
  color: gray;
  margin-left: 6px;
`;

export default Main;
