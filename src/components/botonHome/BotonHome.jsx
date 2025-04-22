import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

const BotonHome = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Volver al Inicio
      </Button>
    </>
  );
};

export default BotonHome;
