export const logError = (error) => {
  if (error.response) {
    console.log("response.data", error.response.data);
    console.log("response.status", error.response.status);
    console.log("response.headers", error.response.headers);
  }
  if (error.request) {
    console.log("request", error.request);
  }
  if (error.message) {
    console.log("message", error.message);
  }
};
