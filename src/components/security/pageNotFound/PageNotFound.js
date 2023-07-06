import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/login");
  };
  return (
    <div>
      <h2>La página solicitada no fue encontrada</h2>
      <Button onClick={goBackHandler} variant="primary">
        Volver a iniciar sesión
      </Button>
    </div>
  );
};

export default PageNotFound;
