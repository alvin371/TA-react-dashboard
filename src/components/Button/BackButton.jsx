import {Button} from "@windmill/react-ui";
import React from "react";
import {useNavigate} from "react-router-dom";
import {ArrowLeft} from "../../icons";

const BackButton = ({text = "Go Back"}) => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)}>
      <ArrowLeft className="h-5 w-5 mr-1" />
      {text}
    </Button>
  );
};

export default BackButton;
