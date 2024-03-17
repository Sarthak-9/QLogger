import axios from "axios";
import { SEARCH_API } from "../constants/searchConstants";

export const searchLogs = async (
  query: Record<string, string>,
  pageIndex: number,
  limit: number,
  sortOrder: string,
  sortParameter: string
) => {
  const skip = pageIndex * limit;
  const params = {
    params: {
      ...query,
      skip,
      limit,
      sortOrder,
      sortParameter,
    },
  };
  const response = await axios.get(`${SEARCH_API}`, params);
  if (response.status !== 200) {
    throw new Error("Error while fetching logs");
  }
  return response?.data;
};
