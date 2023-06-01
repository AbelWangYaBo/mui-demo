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
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Input from "@mui/material/Input";
import MultilineInput from "@/components/multiline-input";

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
    if (!webOrderNo) {
      return;
    }
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
          fullScreen
        >
          <DialogTitle>
            <Typography>Approve Orders For {data.customer}</Typography>
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <Grid container spacing={2}>
              <Grid xs={6} md={2} lg={1}>
                My PO No.
              </Grid>
              <Grid xs={6} md={4} lg={3}>
                33234324324
              </Grid>
              <Grid xs={6} md={2} lg={1}>
                Deliv. Date
              </Grid>
              <Grid xs={6} md={4} lg={2}>
                05-Aug-2022
              </Grid>
              <Grid xs={6} md={2} lg={1}>
                Date
              </Grid>
              <Grid xs={6} md={4} lg={2}>
                PO 05-Aug-2022 Rcvd. 05-Aug-2022
              </Grid>
              <Grid xs={6} md={2} lg={1}>
                Ship To
              </Grid>
              <Grid xs={6} md={4} lg={2}>
                N. Sunderlal & Co. (Anish) - Navi Mumbai [0006233732] -
              </Grid>

              <Grid xs={6} md={2} lg={1}>
                Bill To
              </Grid>
              <Grid xs={6} md={4} lg={2}>
                N Sunderlal & Company - Mumbai [0006201603]
              </Grid>

              <Grid xs={6} md={2} lg={1}>
                Payer
              </Grid>
              <Grid xs={6} md={4} lg={2}>
                N Sunderlal & Company - Mumbai [0006201603]
              </Grid>

              <Grid xs={6} md={2} lg={1}>
                Shipping Instructions
              </Grid>
              <Grid xs={6} md={4} lg={2}>
                <MultilineInput
                  value={`PO No : sdfsdgdf\r\n62B6PO No : 33234324324`}
                ></MultilineInput>
              </Grid>

              <Grid xs={6} md={2} lg={1}></Grid>
              <Grid xs={6} md={4} lg={2}></Grid>

              <Grid xs={6} md={2} lg={1}></Grid>
              <Grid xs={6} md={4} lg={2}></Grid>

              <Grid xs={6} md={2} lg={1}></Grid>
              <Grid xs={6} md={4} lg={2}></Grid>

              <Grid xs={6} md={2} lg={1}></Grid>
              <Grid xs={6} md={4} lg={2}></Grid>

              <Grid xs={6} md={2} lg={1}></Grid>
              <Grid xs={6} md={4} lg={2}></Grid>

              <Grid xs={6} md={2} lg={1}></Grid>
              <Grid xs={6} md={4} lg={2}></Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default App;
