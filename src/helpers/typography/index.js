export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const toTitleCase = (string) => {
  return string.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const removeEndSpaces = (string) => {
  return string.trim();
};

export const sendNullReq = (string) => {
  if (string === "") {
    return null;
  }
  return string;
};

export const truncateText = (text, length) => {
  if (text === null) {
    return "";
  }
  if (text.split("").length > length) {
    const displayText = text.split("", length);
    return `${displayText.join("")}...`;
  }
  return text;
};
