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
// import Input from "@mui/material/Input";
import MultilineInput from "@/components/multiline-input";
import Input from "@mui/base/Input";
import Checkbox from "@mui/material/Checkbox";

import { useFormik } from "formik";

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

  const formik = useFormik({
    initialValues: {
      shippingInstructions: "PO No : sdfsdgdf\r\n62B6PO No : 33234324324",
      tax: "62B6",
      complDelyIndicator: false,
      statutoryDocument: true,
    },
    onSubmit: async (values, helpers) => {
      try {
        console.log("submit");
        return;
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err?.message });
        helpers.setSubmitting(false);
      }
    },
  });

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
              <Grid xs={6} md={4} lg={3}>
                05-Aug-2022
              </Grid>
              <Grid xs={6} md={2} lg={1}>
                Date
              </Grid>
              <Grid xs={6} md={4} lg={3}>
                PO 05-Aug-2022 Rcvd. 05-Aug-2022
              </Grid>
              <Grid xs={6} md={2} lg={1}>
                Ship To
              </Grid>
              <Grid xs={6} md={4} lg={3}>
                N. Sunderlal & Co. (Anish) - Navi Mumbai [0006233732] -
              </Grid>

              <Grid xs={6} md={2} lg={1}>
                Bill To
              </Grid>
              <Grid xs={6} md={4} lg={3}>
                N Sunderlal & Company - Mumbai [0006201603]
              </Grid>

              <Grid xs={6} md={2} lg={1}>
                Payer
              </Grid>
              <Grid xs={6} md={4} lg={3}>
                N Sunderlal & Company - Mumbai [0006201603]
              </Grid>

              <Grid xs={6} md={2} lg={1}>
                Shipping Instructions
              </Grid>
              <Grid xs={6} md={4} lg={3}>
                <MultilineInput
                  name="shippingInstructions"
                  value={formik.values.shippingInstructions}
                  onChange={formik.handleChange}
                  multiline
                  readOnly
                  disabled
                ></MultilineInput>
              </Grid>

              <Grid xs={6} md={2} lg={1}>
                Change Default Plant / Tax
              </Grid>
              <Grid xs={6} md={4} lg={3}>
                <MultilineInput value={formik.values.tax} disabled />
              </Grid>

              <Grid xs={6} md={3} lg={2}>
                Compl. Dely. Indicator
                <Checkbox value={formik.values.complDelyIndicator} />
              </Grid>
              <Grid xs={6} md={3} lg={2}>
                Statutory Document
                <Checkbox value={formik.values.statutoryDocument} />
              </Grid>

              <Grid xs={6} md={2} lg={1}></Grid>
              <Grid xs={6} md={4} lg={3}></Grid>

              <Grid xs={6} md={2} lg={1}></Grid>
              <Grid xs={6} md={4} lg={3}></Grid>

              <Grid xs={6} md={2} lg={1}></Grid>
              <Grid xs={6} md={4} lg={3}></Grid>

              <Grid xs={6} md={2} lg={1}></Grid>
              <Grid xs={6} md={4} lg={3}></Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button type="button" onClick={onClose}>
              Back
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default App;
