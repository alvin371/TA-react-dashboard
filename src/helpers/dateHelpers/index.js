import {
  MILISECOND_TO_DAY,
  MILISECOND_TO_HOUR,
  MILISECOND_TO_MINUTE,
  MILISECOND_TO_SECOND,
} from "../../constants";

export const differentDateStatus = (d) => {
  const date = new Date(d);
  const now = new Date();
  const difference = now.getTime() - date.getTime();
  const days = Math.ceil(difference / (1000 * 3600 * 24));
  const month = Math.round(difference / (1000 * 60 * 60 * 24));
  const year = now.getFullYear() - date.getFullYear();

  if (days < 7) {
    return `${days} hari yang lalu`;
  } else if (days < 14) {
    return `minggu lalu`;
  } else if (days < 28) {
    return `2 minggu lalu`;
  } else if (days < 31) {
    return "bulan lalu";
  } else if (days < 366) {
    return `${month} bulan lalu`;
  } else {
    return `${year} tahun lalu`;
  }
};

export const inputDate = (date) => {
  return date.substr(0, 10);
};

export const shortDateTime = (date) => {
  if (!date) return "";
  const d = new Date(date);
  const getFull = d.toString().split(" ");
  const [, , , year, clock] = getFull;
  const day = d.getDate();
  const month = d.getMonth() + 1;
  return `${day}/${month}/${year}, ${clock}`;
};

export const convertTime = (string) => {
  switch (string) {
    case "days":
      return MILISECOND_TO_DAY;
    case "hours":
      return MILISECOND_TO_HOUR;
    case "minutes":
      return MILISECOND_TO_MINUTE;
    case "seconds":
      return MILISECOND_TO_SECOND;

    default:
      return MILISECOND_TO_HOUR;
  }
};
