import React from "react";
import "./logItemStyles.css";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { trimString } from "../../utils/commonUtils";

interface LogMessageItemProps {
  title: string;
  subTitle: string;
}

export const LogMessageItem = (props: LogMessageItemProps) => {
  return (
    <div className="logMessageItem">
      <Typography variant="body1">{props.title} :</Typography>
      <Tooltip title={props.subTitle}>
        <Typography variant="body1">
          {trimString(props.subTitle, 15)}
        </Typography>
      </Tooltip>
    </div>
  );
};

export default LogMessageItem;
