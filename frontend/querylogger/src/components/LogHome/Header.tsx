import React from "react";
import {
  FILTER_PARAMATERS,
  LIMIT,
  SORT_ORDER,
} from "../../constants/searchConstants";
import "./logStyles.css";
import { HeaderItem } from "./HeaderItem";

interface HeaderProps {
  handleInputChange: (e: any) => void;
  fetchLogs: () => void;
  handlePageChange: (type: string) => void;
  pageIndex: number;
  totalCount: number;
  limit: number;
  sortOrder: string;
  sortParameter: string;
  setLimit: (limit: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSortParameter: (sortParameter: string) => void;
  filters: Record<string, string>;
  setPageIndex: (pageIndex: number) => void;
}

export const Header = (props: HeaderProps) => {
  const totalPages = Math.ceil(
    props.totalCount / parseInt(props.filters.limit ?? "10")
  );
  return (
    <div className="loggerHeader">
      <div className="adaptiveRow">
        <div className="headingRow">
          <h2>Logger</h2>
          <div className="searchRow">
            <input
              name="keyword"
              type="text"
              placeholder="Search"
              className="searchInput"
              onChange={props.handleInputChange}
            />
            <button
              className="button"
              onClick={() => {
                props.setPageIndex(0);
                props.fetchLogs();
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="headerActionsRow">
          <div className="adaptiveRow">
            <div className="commonRow">
              <HeaderItem
                itemName="sortParameter"
                options={FILTER_PARAMATERS}
                label="Sort By"
                currentValue={props.sortParameter}
                defaultValue="timestamp"
                handleInputChange={props.handleInputChange}
                setSortOrder={props.setSortOrder}
                setPageIndex={props.setPageIndex}
                filters={props.filters}
                onChange={(e: any) => {
                  props.setPageIndex(0);
                  props.handleInputChange(e);
                  props.setSortParameter(e.target.value);
                }}
              />
              <HeaderItem
                itemName="sortOrder"
                options={SORT_ORDER}
                label="Order"
                currentValue={props.sortOrder}
                defaultValue="desc"
                handleInputChange={props.handleInputChange}
                setSortOrder={props.setSortOrder}
                setPageIndex={props.setPageIndex}
                filters={props.filters}
                onChange={(e: any) => {
                  props.setPageIndex(0);
                  props.handleInputChange(e);
                  props.setSortOrder(e.target.value);
                }}
              />
            </div>
            <div className="commonRow">
              <HeaderItem
                itemName="limit"
                options={LIMIT}
                label="Limit"
                currentValue={props.limit.toString()}
                defaultValue="10"
                handleInputChange={props.handleInputChange}
                setSortOrder={props.setSortOrder}
                setPageIndex={props.setPageIndex}
                filters={props.filters}
                onChange={(e: any) => {
                  props.setPageIndex(0);
                  props.handleInputChange(e);
                  props.setLimit(parseInt(e.target.value));
                }}
              />
              <div className="commonColumn">
                <span className="pageText">{`Page ${
                  props.pageIndex + 1
                } of ${totalPages}`}</span>
                <div className="commonRow">
                  <button
                    className="secondaryButton"
                    disabled={props.pageIndex === 0}
                    onClick={() => props.handlePageChange("prev")}
                  >
                    Prev
                  </button>
                  <button
                    className="secondaryButton"
                    disabled={props.pageIndex + 1 >= totalPages}
                    onClick={() => props.handlePageChange("next")}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
