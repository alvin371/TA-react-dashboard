import {TableCell} from "@windmill/react-ui";
import React from "react";

export const varSort = {
  ASC: "ASC",
  DESC: "DESC",
};

const ArrowIcon = ({display}) => {
  const checkUp = (sort) => {
    switch (sort) {
      case varSort.ASC:
        return "#7e3af2";
      case varSort.DESC:
        return "#CBD5E0";
      default:
        return "#CBD5E0";
    }
  };

  const checkDown = (sort) => {
    switch (sort) {
      case varSort.ASC:
        return "#CBD5E0";
      case varSort.DESC:
        return "#7e3af2";
      default:
        return "#CBD5E0";
    }
  };
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.29279 9.70679C2.10532 9.51926 2 9.26495 2 8.99979C2 8.73462 2.10532 8.48031 2.29279 8.29279L6.29279 4.29279C6.48031 4.10532 6.73462 4 6.99979 4C7.26495 4 7.51926 4.10532 7.70679 4.29279L11.7068 8.29279C11.8889 8.48139 11.9897 8.73399 11.9875 8.99619C11.9852 9.25838 11.88 9.5092 11.6946 9.6946C11.5092 9.88001 11.2584 9.98518 10.9962 9.98746C10.734 9.98974 10.4814 9.88894 10.2928 9.70679L7.99979 7.41379V14.9998C7.99979 15.265 7.89443 15.5194 7.70689 15.7069C7.51936 15.8944 7.265 15.9998 6.99979 15.9998C6.73457 15.9998 6.48022 15.8944 6.29268 15.7069C6.10514 15.5194 5.99979 15.265 5.99979 14.9998V7.41379L3.70679 9.70679C3.51926 9.89426 3.26495 9.99957 2.99979 9.99957C2.73462 9.99957 2.48031 9.89426 2.29279 9.70679V9.70679Z"
        fill={checkUp(display)}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.7193 15.293C21.9068 15.4805 22.0121 15.7348 22.0121 16C22.0121 16.2652 21.9068 16.5195 21.7193 16.707L17.7193 20.707C17.5318 20.8945 17.2775 20.9998 17.0123 20.9998C16.7471 20.9998 16.4928 20.8945 16.3053 20.707L12.3053 16.707C12.2098 16.6148 12.1336 16.5044 12.0812 16.3824C12.0288 16.2604 12.0012 16.1292 12 15.9964C11.9989 15.8636 12.0242 15.7319 12.0745 15.609C12.1247 15.4861 12.199 15.3745 12.2929 15.2806C12.3868 15.1867 12.4984 15.1125 12.6213 15.0622C12.7442 15.0119 12.8759 14.9866 13.0087 14.9877C13.1415 14.9889 13.2727 15.0165 13.3947 15.0689C13.5167 15.1213 13.627 15.1975 13.7193 15.293L16.0123 17.586V10C16.0123 9.73478 16.1176 9.48043 16.3052 9.29289C16.4927 9.10536 16.7471 9 17.0123 9C17.2775 9 17.5319 9.10536 17.7194 9.29289C17.9069 9.48043 18.0123 9.73478 18.0123 10V17.586L20.3053 15.293C20.4928 15.1055 20.7471 15.0002 21.0123 15.0002C21.2775 15.0002 21.5318 15.1055 21.7193 15.293V15.293Z"
        fill={checkDown(display)}
      />
    </>
  );
};

const TableHead = ({children, sort, contextSort, contextOrder, onClick}) => {
  const checkAsc = sort === contextSort && contextOrder === "ASC";
  const checkDesc = sort === contextSort && contextOrder === "DESC";

  const displaySort = () => {
    if (checkAsc) {
      return <ArrowIcon display={varSort.ASC} />;
    }
    if (checkDesc) {
      return <ArrowIcon display={varSort.DESC} />;
    }
    return <ArrowIcon />;
  };

  if (!sort) {
    return <TableCell>{children}</TableCell>;
  }

  return (
    <TableCell
      name={sort}
      className="cursor-pointer"
      onClick={() => {
        if (sort !== contextSort) onClick(sort, "ASC");
        if (sort === contextSort) {
          if (contextOrder === "ASC") onClick(sort, "DESC");
          if (contextOrder === "DESC") onClick(sort, "ASC");
        }
      }}
    >
      <div className="flex flex-row gap-1 justify-between items-center ">
        <div>{children}</div>
        <svg
          className="h-4 w-4"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {displaySort()}
        </svg>
      </div>
    </TableCell>
  );
};

export default TableHead;
