import { StringExpression } from "mongoose";
import LogModel from "./model";
import { BulkWriteLogObject, LogInterface, SearchQuery } from "./types";
import { BulkWriteResult } from "mongodb";

export const prepareLogBulkWrite = (logs: LogInterface[]) => {
  return logs.map((log) => {
    return {
      insertOne: {
        document: log,
      },
    };
  });
};

export const bulkWriteLogs = async (bulkWriteLogs: BulkWriteLogObject[]) => {
  try {
    const bulkWritePromises: Promise<BulkWriteResult>[] = [];
    for (let i = 0; i < bulkWriteLogs.length; i += 1000) {
      const chunks = bulkWriteLogs.slice(i, i + 1000);
      bulkWritePromises.push(
        LogModel.bulkWrite(chunks) as Promise<BulkWriteResult>
      );
    }
    await Promise.all(bulkWritePromises);
  } catch (err) {
    throw err;
  }
};

export const prepareQueryToGetLogs = (query: SearchQuery) => {
  const skip = query.skip ? parseInt(query.skip) : 0;
  const limit = query.limit ? parseInt(query.limit) : 1000;
  let sortParameter = "timestamp";
  const sortOrder: 1 | -1 = query.sortOrder === "asc" ? 1 : -1;
  const preparedQuery: Record<
    string,
    | string
    | RegExp
    | Date
    | Record<string, string | Date>
    | Record<string, RegExp>[]
  > = {};

  if (query.sortParameter) {
    if (query.sortParameter === "parentResourceId") {
      sortParameter = "metadata.parentResourceId";
    } else {
      sortParameter = query.sortParameter;
    }
  }

  if (query.keyword) {
    preparedQuery["$or"] = [
      { level: new RegExp(query.keyword, "i") },
      { message: new RegExp(query.keyword, "i") },
      { resourceId: new RegExp(query.keyword, "i") },
      { traceId: new RegExp(query.keyword, "i") },
      { spanId: new RegExp(query.keyword, "i") },
      { commit: new RegExp(query.keyword, "i") },
      { "metadata.parentResourceId": new RegExp(query.keyword, "i") },
    ];
    console.log(preparedQuery);
  }

  if (query.level) {
    preparedQuery["level"] = new RegExp(query.level, "i");
  }
  if (query.message) {
    preparedQuery["message"] = new RegExp(query.message, "i");
  }
  if (query.resourceId) {
    preparedQuery["resourceId"] = new RegExp(query.resourceId, "i");
  }
  if (query.traceId) {
    preparedQuery["traceId"] = new RegExp(query.traceId, "i");
  }
  if (query.spanId) {
    preparedQuery["spanId"] = new RegExp(query.spanId, "i");
  }
  if (query.commit) {
    preparedQuery["commit"] = new RegExp(query.commit, "i");
  }
  if (query.parentResourceId) {
    preparedQuery["metadata.parentResourceId"] = new RegExp(
      query.parentResourceId,
      "i"
    );
  }
  if (query.timestamp) {
    preparedQuery["timestamp"] = query.timestamp;
  }
  if (query.timestampUpper || query.timestampLower) {
    preparedQuery["timestamp"] = {};
    if (query.timestampUpper) {
      preparedQuery["timestamp"]["$lte"] = new Date(query.timestampUpper);
    }
    if (query.timestampLower) {
      preparedQuery["timestamp"]["$gte"] = new Date(query.timestampLower);
    }
  }
  return { preparedQuery, skip, limit, sortParameter, sortOrder };
};

export const getLogsMethod = async (
  preparedQuery: Record<
    string,
    | string
    | RegExp
    | Date
    | Record<string, string | Date>
    | Record<string, RegExp>[]
  >,
  skip: number,
  limit: number,
  sortParameter: string,
  sortOrder: 1 | -1
) => {
  try {
    const countLogsPromise = LogModel.countDocuments(preparedQuery);
    const logsPromise = LogModel.find(preparedQuery)
      .sort({ [sortParameter]: sortOrder })
      .skip(skip)
      .limit(limit)
      .lean();
    const [total, logs] = await Promise.all([countLogsPromise, logsPromise]);
    return { total, logs };
  } catch (err) {
    throw err;
  }
};
