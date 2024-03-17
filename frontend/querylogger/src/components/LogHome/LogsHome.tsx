import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { searchLogs } from "../../utils/searchUtils";
import LogItem from "../LogItem/LogItem";
import "./logStyles.css";
import { LogInterface } from "../../types/logTypes";
import LogFilters from "../LogFilters/LogFilters";
import { Header } from "./Header";

const LogsHome = () => {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [searchedLogs, setSearchedLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortParameter, setSortParameter] = useState("timestamp");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchLogs();
  }, [pageIndex, limit, sortOrder, sortParameter]);

  const fetchLogs = async () => {
    setIsLoading(true);
    try {
      const { total, logs } = await searchLogs(
        filters,
        pageIndex,
        limit,
        sortOrder,
        sortParameter
      );
      setHasError(false);
      setSearchedLogs(logs);
      setTotalCount(total);
      setIsLoading(false);
    } catch (err) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handlePageChange = (type: string) => {
    let page = pageIndex;
    if (type === "prev") {
      page = pageIndex - 1;
    } else {
      page = pageIndex + 1;
    }
    setPageIndex(page);
  };

  const handleInputChange = (e: any) => {
    console.log(e);
    console.log(e.target.name);
    const updatedFilters = {
      ...filters,
      [e.target.name]: e.target.value,
    };
    console.log(updatedFilters);
    setFilters(updatedFilters);
  };

  return (
    <div className="logHome">
      <Header
        handleInputChange={handleInputChange}
        fetchLogs={fetchLogs}
        handlePageChange={handlePageChange}
        pageIndex={pageIndex}
        totalCount={totalCount}
        filters={filters}
        limit={limit}
        sortOrder={sortOrder}
        sortParameter={sortParameter}
        setLimit={setLimit}
        setSortOrder={setSortOrder}
        setSortParameter={setSortParameter}
        setPageIndex={setPageIndex}
      />
      <div className="content">
        <LogFilters
          handleInputChange={handleInputChange}
          fetchLogs={fetchLogs}
          setPageIndex={setPageIndex}
        />
        {isLoading ? (
          <div className="loader">
            <CircularProgress
              disableShrink={true}
              color="primary"
              variant="indeterminate"
              value={75}
            />
          </div>
        ) : hasError ? (
          <div className="loader">
            <h2 className="errorText">Oops !! An error occured</h2>
          </div>
        ) : (
          <div className="logsContainer">
            <div className="logsHeader">
              <h2>Logs</h2>
              <span className="headerText">{`Total logs: ${totalCount}`}</span>
            </div>
            {searchedLogs.length === 0 && (
              <div className="loader">
                <h2 className="errorText">No logs found</h2>
              </div>
            )}
            {searchedLogs.map((log: LogInterface, index: number) => (
              <LogItem log={log} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LogsHome;
