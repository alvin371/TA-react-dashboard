export const notMandatoryParams = (args, params) => {
  return args !== "" ? params : {};
};
