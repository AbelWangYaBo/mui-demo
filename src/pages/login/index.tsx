import { Typography, Button } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router";

const Index = () => {
  const onClick = () => {
    enqueueSnackbar({
      message: "From Login Page",
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      autoHideDuration: 3000,
    });
  };

  const navigate = useNavigate();
  const onNavigate = () => {
    navigate("/");
  };
  return (
    <div>
      <Typography component="h2">Login Index</Typography>
      <Button onClick={onClick}>Click</Button>
      <Button onClick={onNavigate}>Navigate</Button>
    </div>
  );
};

export default Index;
