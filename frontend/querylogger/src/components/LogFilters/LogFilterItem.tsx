import React from "react";
import "./logFilterStyles.css";

interface LogFilterItemProps {
  label: string;
  name: string;
  type: string
  handleInputChange: (e: any) => void;
}

export const LogFilterItem = (props: LogFilterItemProps) => {
  return (
    <div className="filterItem">
      <label className="label" htmlFor="timestampUpper">{props.label}</label>
      <input
        className="filterInput"
        type={props.type}
        id={props.name}
        name={props.name}
        onChange={props.handleInputChange}
      />
    </div>
  );
};
