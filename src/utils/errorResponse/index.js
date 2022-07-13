import { toast } from "react-toastify";
import { capitalizeFirstLetter } from "../../helpers";

const checkStatus422 = (error) => {
  if (error.response.status === 422) {
    error.response.data.data.map((data) =>
      data.message.map((msg) =>
        toast(capitalizeFirstLetter(msg), {
          type: "error",
        })
      )
    );
  }
};

export const errorResponseAccount = (error) => {
  checkStatus422(error);
  if (error.response.status === 409) {
    toast(capitalizeFirstLetter(error.response.data.message), {
      type: "error",
    });
  }
  if (error.response.status === 403) {
    toast(capitalizeFirstLetter(error.response.data.message), {
      type: "error",
    });
  }
  if (error.response.status === 413) {
    if (error.response.data.message === "File too large") {
      toast("File too large. Max size 2MB", {
        type: "error",
      });
    }
  }
  if (error.response.status === 400) {
    if (error.response.data.message === "Only image files are allowed") {
      toast("Only images with .PNG .JPG .JPEG .GIF format are allowed", {
        type: "error",
      });
    }
  }
};

export const errorResponseCity = (error) => {
  checkStatus422(error);
};

export const errorResponseBranch = (error) => {
  checkStatus422(error);
  if (error.response.status === 409) {
    toast(capitalizeFirstLetter(error.response.data.message), {
      type: "error",
    });
  }
};

export const errorResponseSalesman = (error) => {
  checkStatus422(error);
};

export const errorResponseRole = (error) => {
  checkStatus422(error);
  if (error.response.status === 401) {
    toast(capitalizeFirstLetter(error.response.data.message), {
      type: error.response.data.message,
    });
  }
  if (error.response.status === 403) {
    toast(capitalizeFirstLetter(error.response.data.message), {
      type: "error",
    });
  }
  if (error.response.status === 409) {
    toast.error(error.response.data.message);
  }
  if (error.response.status === 400) {
    toast.error(error.response.data.message);
  }
};

export const errorResponseTestimony = (error) => {
  checkStatus422(error);
  if (error.response.status === 409) {
    toast(error.response.data.message, {
      type: "error",
    });
  }
  if (error.response.status === 400) {
    toast(capitalizeFirstLetter(error.response.data.data), {
      type: "error",
    });
  }
  if (error.response.status === 413) {
    toast(capitalizeFirstLetter(error.response.data.data), {
      type: "error",
    });
  }
};

export const errorResponsePromo = (error) => {
  checkStatus422(error);
  if (error.response.status === 409) {
    toast(capitalizeFirstLetter("Cannot delete promo, promo still published"), {
      type: "error",
    });
  }
};

export const errorPromoAdd = (error) => {
  switch (error.response.status) {
    case 422:
      error.response.data.data.map((err) => {
        return {
          [err.property]: err.message,
        };
      });
      break;
    default:
      return "Not Saved!";
  }
};
