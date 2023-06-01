import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

// backdrop

const Index = () => {
  return (
    <Modal
      open={true}
      aria-labelledby="loading spin"
      aria-describedby="loading spin"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "transparent",
          border: "0",
          textAlign: "center",
        }}
      >
        <CircularProgress color="secondary" />
        <Typography component="h2" color="secondary" sx={{ mt: 1 }}>
          Loading...
        </Typography>
      </Box>
    </Modal>
  );
};

export default Index;
