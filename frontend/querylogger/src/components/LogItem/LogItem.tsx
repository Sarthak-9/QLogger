import React from "react";
import "./logItemStyles.css";
import { LogInterface } from "../../types/logTypes";
import LogDetailItem from "./LogDetailItem";
import LogMessageItem from "./LogMessageItem";

interface LogItemProps {
  log: LogInterface;
}

export const LogItem = (props: LogItemProps) => {
  return (
    <div className="logItem">
      <LogDetailItem title="Level" subTitle={props.log.level} />
      <LogDetailItem title="Resource Id" subTitle={props.log.resourceId} />
      <LogDetailItem
        title="Timestamp"
        subTitle={props.log.timestamp?.toString()}
      />
      <LogDetailItem title="Trace Id" subTitle={props.log.traceId} />
      <LogDetailItem title="Span Id" subTitle={props.log.spanId} />
      <LogDetailItem title="Commit" subTitle={props.log.commit} />
      <LogDetailItem
        title="Parent Resource Id"
        subTitle={props.log.metadata.parentResourceId}
      />
      <LogMessageItem title="Message" subTitle={props.log.message} />
    </div>
  );
};

export default LogItem;
