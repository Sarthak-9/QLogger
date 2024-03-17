import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import "./logItemStyles.css";
import { trimString } from "../../utils/commonUtils";

interface LogDetailItemProps {
  title: string;
  subTitle: string;
}

export const LogDetailItem = (props: LogDetailItemProps) => {
  return (
    <div className="logDetailItem">
      <Typography variant="body1">{props.title} :</Typography>
      <Tooltip title={props.subTitle}>
        <Typography variant="body1">
          {trimString(props.subTitle, 5)}
        </Typography>
      </Tooltip>    </div>
  );
};

export default LogDetailItem;
