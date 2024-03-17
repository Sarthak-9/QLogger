export interface LogInterface {
  level: string;
  message: string;
  resourceId: string;
  timestamp: Date | string;
  traceId: string;
  spanId: string;
  commit: string;
  metadata: {
    parentResourceId: string;
  };
}

export interface BulkWriteLogObject {
  insertOne: {
    document: LogInterface;
  };
}

export interface SearchQuery {
  keyword?: string;
  level?: string;
  message?: string;
  resourceId?: string;
  timestamp?: string;
  timestampUpper?: string;
  timestampLower?: string;
  traceId?: string;
  spanId?: string;
  commit?: string;
  parentResourceId?: string;
  skip?: string;
  limit?: string;
  sortParameter?: string;
  sortOrder?: string;
}
