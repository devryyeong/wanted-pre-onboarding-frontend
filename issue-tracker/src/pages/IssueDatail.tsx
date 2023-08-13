import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from "@emotion/styled";
import ReactMarkdown from 'react-markdown';
import { useIssueDetail } from "../context/detailContext";
import { parseDate } from "../utils/parseDate";
import Spinner from "../components/Spinner";
import IcOpen from '../assets/ic-open.svg';

const IssueDatail = () => {
  const { id } = useParams<{ id: string; }>();
  const navigate = useNavigate();

  const { detail, loading, loadIssueDetail } = useIssueDetail();
  const { number, title, body, comments, updated_at, user } = detail;

  if (!id) {
    alert('페이지를 찾을 수 없습니다.');
    navigate('/');
  }

  useEffect(() => {
    loadIssueDetail(Number(id));
  }, []);
  

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
            <Title>
              {title} #{number}
            </Title>
          <TopContainer>
              <img src={IcOpen} alt="opened"/>
              <Comments> {comments} comments</Comments>
          </TopContainer>
          <Container>
            <Avatar src={user.avatar_url} />
            <ContentsContainer>
              <TextBox>
                <Text>
                  {user.login} on {parseDate(updated_at)}
                </Text>
              </TextBox>
              <div style={{ padding: "10px" }}>
                <ReactMarkdown>{body}</ReactMarkdown>
              </div>
            </ContentsContainer>
          </Container>
        </>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  padding: 10px;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const ContentsContainer = styled.div`
  border-radius: 7px;
  border: 1px solid gray;
`;

const Title = styled.div`
  font-size: 32px;
  padding: 10px 0px 0px 10px;
`;

const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-right: 10px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-bottom: solid 1px black;
  background-color: #f5f8fa;
`;

const Text = styled.span`
  box-sizing: border-box;
  margin: auto 5px;
`;

const Comments = styled.div`
  margin-left: 10px;
  color: gray;
`;

export default IssueDatail