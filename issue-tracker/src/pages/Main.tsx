import { Fragment, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { getIssue } from "../apis/issue";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import IcChat from '../assets/ic-chat.png';
import { IssueType } from "../types/issue";
import { parseDate } from "../utils/parseDate";
import Ad from "../components/Ad";
import { IMG_SRC } from "../constant";

const Main: React.FC = () => {
  const navigate = useNavigate();

  const [issues, setIssues] = useState<AxiosResponse | any>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMoreIssues = async () => {
    const nextPage = Math.floor(issues.length / 30) + 1;

    setLoading(true);
    const res = await getIssue("", nextPage);

    if (res.length < 30) {
      setLoading(false);
      return;
    }

    setIssues([...issues, ...res]);
    setLoading(false);
  };

  const { target } = useInfiniteScroll<HTMLDivElement>(loadMoreIssues);

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
    try {
      navigate(`/issues/${issueNumber}`);
    } catch (error) {
      console.error("Error fetching issues: ", error);
    }
  };

  return (
    <>
      {issues &&
        issues?.map((issue: IssueType, index: number) => (
          <>
            <Fragment key={issue.number}>
              <Container key={index}>
                <TopContainer>
                  <Title
                    onClick={() => {
                      handleIssueClick(issue.number);
                    }}
                  >
                    {issue.title}
                  </Title>
                  <CommentContainer>
                    <CommentIcon src={IcChat} />
                    <Comment>{issue.comments}</Comment>
                  </CommentContainer>
                </TopContainer>
                <ContentsContainer>
                  <BottomContainer>
                    <SubText>
                      #{issue.number} opened on {parseDate(issue.updated_at)}{" "}
                      by&nbsp;
                    </SubText>
                    <UserAvatar src={issue.user.avatar_url} />
                    <SubTextBold>&nbsp;{issue.user.login}</SubTextBold>
                  </BottomContainer>
                </ContentsContainer>
              </Container>
              {index % 4 === 3 && <Ad keyIndex={index} imgSrc={IMG_SRC} />}
            </Fragment>
            <div ref={target} style={{ height: "1rem" }}></div>
          </>
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
