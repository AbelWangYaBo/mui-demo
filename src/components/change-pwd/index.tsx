import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  TextField,
  FormHelperText,
  Typography,
  Alert,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Backdrop,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

import { submit } from "./mock";

const Index = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      password: "",
      password2: "",
      submit: null,
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string().max(255).required("Password is required"),
      password: Yup.string().max(255).required("New Password is required"),
      password2: Yup.string()
        .max(255)
        .required("Confirm New Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        console.log("submit");
        const { password, password2, oldPassword } = values;
        await submit({ password, password2, oldPassword });

        enqueueSnackbar("Password has changed");

        return;
      } catch (err) {
        console.log("err", err);
        setLoading(false);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleConfirm = () => {
    //
    formik.submitForm();
  };

  const handleCancel = () => {
    //
    formik.resetForm();
    onClose();
  };

  return (
    <>
      <Dialog open={open} fullWidth>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent dividers>
          <form noValidate onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
              <TextField
                error={
                  !!(formik.touched.oldPassword && formik.errors.oldPassword)
                }
                fullWidth
                helperText={
                  formik.touched.oldPassword && formik.errors.oldPassword
                }
                label="Password"
                name="oldPassword"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.oldPassword}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                error={!!(formik.touched.password && formik.errors.password)}
                fullWidth
                helperText={formik.touched.password && formik.errors.password}
                label="New Password"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                error={!!(formik.touched.password2 && formik.errors.password2)}
                fullWidth
                helperText={formik.touched.password2 && formik.errors.password2}
                label="Confirm New Password"
                name="password2"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password2}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <FormHelperText sx={{ mt: 1 }}></FormHelperText>
            {formik.errors.submit && (
              <Typography color="error" sx={{ mt: 3 }} variant="body2">
                {formik.errors.submit}
              </Typography>
            )}
            <Alert color="primary" severity="info" sx={{ mt: 3 }}>
              <Typography component="h5" sx={{ mb: 1 }}>
                The password should consists of -
              </Typography>
              <ol style={{ fontSize: 12 }}>
                <li>Password must be at least 10 characters long</li>
                <li>Password must contain one lower case alphabets</li>
                <li>Password must contain one upper case alphabets</li>
                <li>Password must contain a numeric character</li>
                <li>Password must contain a special character</li>
                <li>
                  Password must not repeat a character more than half the length
                  of the password
                </li>
                <li>Both passwords must match</li>
              </ol>
            </Alert>
          </form>
        </DialogContent>
        <DialogActions>
          <Button size="medium" onClick={handleConfirm} variant="contained">
            Change Password
          </Button>
          <Button size="medium" onClick={handleCancel} variant="contained">
            Cancel
          </Button>
        </DialogActions>

        <Backdrop open={formik.isSubmitting}></Backdrop>
      </Dialog>
      <SnackbarProvider />
    </>
  );
};

export default Index;
