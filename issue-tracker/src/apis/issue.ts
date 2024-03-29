import { axiosInstance } from "./utils";

export const getIssue = async (query = '', page = 1) => {
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