export const SEARCH_API = "http://localhost:3000/qlogger";
export const FILTER_PARAMATERS = [
  {
    id: "level",
    label: "Level",
  },
  {
    id: "message",
    label: "Message",
  },
  {
    id: "resourceId",
    label: "Resource Id",
  },
  {
    id: "timestamp",

    label: "Timestamp",
  },
  {
    id: "traceId",
    label: "Trace Id",
  },
  {
    id: "spanId",
    label: "Span Id",
  },
  {
    id: "commit",
    label: "Commit",
  },
  {
    id: "parentResourceId",
    label: "Parent Source Id",
  },
];

export const SORT_ORDER = [
  {
    id: "asc",
    label: "Ascending",
  },
  {
    id: "desc",
    label: "Descending",
  },
];

export const LIMIT = [
  {
    id: "10",
    label: "10",
  },
  
  {
    id: "50",
    label: "50",
  },
  {
    id: "100",
    label: "100",
  },
  {
    id: "500",
    label: "500",
  },
  {
    id: "1000",
    label: "1000",
  },
];
