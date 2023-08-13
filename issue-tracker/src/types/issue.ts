export interface IssueType {
  title: string;
  number: number;
  user: {
    login: string;
    url: string;
    avatar_url: string;
  };
  created_at: string;
  comments: number;
  body: string;
}

export interface IssueDetailType {
  number: number;
  user: { avatar_url: string };
  body: string;
}
