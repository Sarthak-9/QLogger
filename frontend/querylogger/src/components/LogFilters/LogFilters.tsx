import React from "react";
import "./logFilterStyles.css";
import { LogFilterItem } from "./LogFilterItem";

interface LogFiltersProps {
  handleInputChange: (e: any) => void;
  fetchLogs: () => void;
  setPageIndex: (pageIndex: number) => void;
}
export const LogFilters = (props: LogFiltersProps) => {
  return (
    <div className="filterContainer">
      <LogFilterItem
        label="Level"
        name="level"
        type="text"
        handleInputChange={props.handleInputChange}
      />
      <LogFilterItem
        label="Message"
        name="message"
        type="text"
        handleInputChange={props.handleInputChange}
      />
      <LogFilterItem
        label="Resource Id"
        name="resourceId"
        type="text"
        handleInputChange={props.handleInputChange}
      />
      <LogFilterItem
        label="Timestamp"
        name="timestamp"
        type="text"
        handleInputChange={props.handleInputChange}
      />
      <LogFilterItem
        label="Trace Id"
        name="traceId"
        type="text"
        handleInputChange={props.handleInputChange}
      />
      <LogFilterItem
        label="Span Id"
        name="spanId"
        type="text"
        handleInputChange={props.handleInputChange}
      />
      <LogFilterItem
        label="Commit"
        name="commit"
        type="text"
        handleInputChange={props.handleInputChange}
      />
      <LogFilterItem
        label="Parent Resource Id"
        name="parentResourceId"
        type="text"
        handleInputChange={props.handleInputChange}
      />
      <LogFilterItem
        label="Timestamp Lower"
        name="timestampLower"
        type="text"
        handleInputChange={props.handleInputChange}
      />
      <LogFilterItem
        label="Timestamp Upper"
        name="timestampUpper"
        type="text"
        handleInputChange={props.handleInputChange}
      />
      <LogFilterItem
        label="From Date"
        name="timestampLower"
        type="date"
        handleInputChange={props.handleInputChange}
      />
      <LogFilterItem
        label="To Date"
        name="timestampUpper"
        type="date"
        handleInputChange={props.handleInputChange}
      />
      <button
        className="button"
        onClick={() => {
          props.setPageIndex(0);
          props.fetchLogs();
        }}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default LogFilters;
