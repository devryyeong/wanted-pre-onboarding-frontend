import React from 'react';
import ReactMarkdown from 'react-markdown';

type IssueDetail = {
  user: { avatar_url: string; };
  body: string;
};

const IssueDatail = ({ id }:any) => {
  return (
    <>
      <div>IssueDatail</div>
      <ReactMarkdown># HELLO</ReactMarkdown>
    </>
  );
};

export default IssueDatail