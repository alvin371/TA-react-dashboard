import { TableCell, TableRow } from "@windmill/react-ui";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";

export const loadingSkeleton = (trNumber, tdNumber) => {
  const tr = [];
  for (let i = 0; i < trNumber; i++) {
    const elements = [];
    for (let j = 0; j < tdNumber; j++) {
      elements.push(
        <TableCell key={j}>
          <Skeleton />
        </TableCell>
      );
    }
    tr.push(<TableRow key={i}>{elements}</TableRow>);
  }
  return tr;
};
