import React from "react";

interface HeaderItemProps {
  itemName: string;
  options: { id: string; label: string }[];
  label: string;
  currentValue: string;
  defaultValue: string;
  handleInputChange: (e: any) => void;
  setSortOrder: (sortOrder: string) => void;
  setPageIndex: (pageIndex: number) => void;
  filters: Record<string, string>;
  onChange: (e: any) => void;
}

export const HeaderItem = (props: HeaderItemProps) => {
  return (
    <div className="headerItem">
      <span className="label">{props.label}</span>
      <select
        className="dropdown"
        name={props.itemName}
        onChange={props.onChange}
        value={props.currentValue ?? props.defaultValue}
      >
        {props.options.map((param) => (
          <option className="dropdown-content" key={param.id} value={param.id}>
            {param.label}
          </option>
        ))}
      </select>
    </div>
  );
};
