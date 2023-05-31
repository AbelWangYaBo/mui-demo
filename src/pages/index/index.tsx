import { Typography, Button } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router";

const Index = () => {
  const onClick = () => {
    enqueueSnackbar({
      message: "From Index Page",
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };

  const navigate = useNavigate();
  const onNavigate = () => {
    navigate("/login");
  };
  return (
    <div>
      <Typography component="h2">Page Index</Typography>
      <Button onClick={onClick}>Click</Button>
      <Button onClick={onNavigate}>Navigate</Button>
    </div>
  );
};

export default Index;
