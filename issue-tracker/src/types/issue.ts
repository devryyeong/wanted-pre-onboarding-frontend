export interface IssueType {
  title: string;
  number: number;
  user: {
    login: string;
    url: string;
    avatar_url: string;
  };
  updated_at: Date;
  comments: number;
  body: string;
}
