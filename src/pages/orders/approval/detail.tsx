import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import type { DialogProps } from "@mui/material/Dialog";
import { getDetail } from "./mock";
import LoadingMask from "@/components/loading-mask";
import Grid from "@mui/material/Unstable_Grid2";

const App = ({
  webOrderNo,
  open,
  onClose,
}: {
  webOrderNo: string;
  open: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    console.log("webOrderNo");
    getData();
  }, [webOrderNo]);

  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");
  const [loading, setLoading] = useState(false);
  const [data, setDate] = useState<AnyObject>({});

  const getData = async () => {
    setLoading(true);

    const resp = await getDetail({ webOrderNo });
    setDate(resp);

    console.log("resp", resp);

    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <LoadingMask />
      ) : (
        <Dialog
          open={open}
          onClose={onClose}
          disableEscapeKeyDown={true}
          fullWidth={true}
          maxWidth="xl"
        >
          <DialogTitle>
            <Typography>Approve Orders For {data.customer}</Typography>
          </DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <Grid container spacing={2}>
              <Grid sm={6} md={3}>
                My PO No.
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default App;
