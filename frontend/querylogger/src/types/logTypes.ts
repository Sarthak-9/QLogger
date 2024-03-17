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