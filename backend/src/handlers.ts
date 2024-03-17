import { Request, Response } from "express";
import {
  bulkWriteLogs,
  getLogsMethod,
  prepareLogBulkWrite,
  prepareQueryToGetLogs,
} from "./methods";
import { LogInterface } from "./types";

export const healthCheck = async (req: Request, res: Response) => {
  res.status(200).send("Healt check passed");
};

export const postLogs = async (req: Request, res: Response) => {
  const logs: LogInterface[] = req?.body;
  if (!logs?.length) {
    return res.status(400).send("Logs not found");
  }
  try {
    const preparedBulkWriteLogs = prepareLogBulkWrite(logs);
    await bulkWriteLogs(preparedBulkWriteLogs);
    return res.status(200).send(`Wrote ${logs.length} logs`);
  } catch (err) {
    return res.status(400).send("Write failed");
  }
};

export const getLogs = async (req: Request, res: Response) => {
  const { query } = req;
  const { preparedQuery, skip, limit, sortParameter, sortOrder } =
    prepareQueryToGetLogs(query);
  const searchedLogs = await getLogsMethod(
    preparedQuery,
    skip,
    limit,
    sortParameter,
    sortOrder
  );
  return res.status(200).send(searchedLogs);
};
