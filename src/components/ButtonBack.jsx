import Button from "./Button";
import { useNavigate } from "react-router-dom";

function ButtonBack() {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1); //go back by 1 in the history
      }}
    >
      &larr; Back
    </Button>
  );
}

export default ButtonBack;
