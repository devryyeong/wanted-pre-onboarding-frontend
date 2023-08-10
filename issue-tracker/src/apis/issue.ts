import { axiosInstance } from "./utils";
import { GITHUB_TOKEN } from "../constant";

export const getIssue = async (query = '', page = 1): Promise<any[]> => {
  const response = await axiosInstance.get('/repos/facebook/react/issues', {
    params: {
      state: 'open',
      per_page: 30,
      page,
      direction: 'desc',
      sort: 'comments',
      q: query,
    },
  });
  return response.data;
};

export const getIssueDetail = async (issueNumber: number) => {
  const response = await axiosInstance.get(`repos/facebook/react/issues/${issueNumber}`);
  return response.data;
};

export const getRepoInfo = async () => {
  const response = await axiosInstance.get("/repos/facebook/react", {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  });
  return response.data;
};