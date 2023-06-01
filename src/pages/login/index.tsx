// import { useCallback, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";
import { enqueueSnackbar } from "notistack";

const auth = {
  signIn(userCode: string, password: string) {
    {
      userCode, password;
    }
    return new Promise((res) => {
      setTimeout(() => {
        res(true);
      }, 1500);
    });
  },
  skip() {
    return true;
  },
};

const Page = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userCode: "mmioms",
      password: "mmioms",
      submit: null,
    },
    validationSchema: Yup.object({
      userCode: Yup.string().max(255).required("User Code is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await auth.signIn(values.userCode, values.password);
        localStorage.setItem("TOKEN", "MMIOMS");
        navigate("/", {
          replace: true,
        });
        enqueueSnackbar({
          message: "Login Success",
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
        return;
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  // const handleSkip = useCallback(() => {
  //   auth.skip();
  //   navigate("/", {
  //     replace: true,
  //   });
  //   return;
  // }, [auth, location]);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
          backgroundImage: "url(/Mkgaa800x600.png)",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "20px",
            width: "100%",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">
                <span
                  style={{
                    fontFamily: "Merck",
                    color: "purple",
                    marginRight: "20px",
                  }}
                >
                  MMIOMS
                </span>{" "}
                Login
              </Typography>
            </Stack>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.userCode && formik.errors.userCode)}
                  fullWidth
                  helperText={formik.touched.userCode && formik.errors.userCode}
                  label="User Code"
                  name="userCode"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.userCode}
                />
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
              </Stack>
              <FormHelperText sx={{ mt: 1 }}>
                with some help text.
              </FormHelperText>
              {formik.errors.submit && (
                <Typography color="error" sx={{ mt: 3 }} variant="body2">
                  {formik.errors.submit}
                </Typography>
              )}
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
                disabled={formik.isSubmitting}
                startIcon={
                  formik.isSubmitting ? (
                    <CircularProgress size={16} color="inherit" />
                  ) : (
                    ""
                  )
                }
              >
                Continue
              </Button>
              <Alert color="primary" severity="info" sx={{ mt: 3 }}>
                <div>
                  You can use <b>mmioms</b> and password <b>mmioms</b>
                </div>
              </Alert>
            </form>
          </div>
        </Box>
      </Box>
    </>
  );
};

document.title = "Login";
export default Page;
