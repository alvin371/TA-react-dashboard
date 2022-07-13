import React from "react";
import {Badge} from "@windmill/react-ui";

const statusPublish = (status) => {
  let result;
  switch (status) {
    case true:
      result = <Badge type="success">PUBLISHED</Badge>;
      break;
    case false:
      result = <Badge type="warning">DRAFT</Badge>;
      break;
    default:
      result = <Badge type="neutral">UNDEFINED</Badge>;
      break;
  }
  return result;
};

export default statusPublish;
