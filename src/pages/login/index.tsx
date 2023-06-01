import { useCallback, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

const auth = {
  signIn(userCode: string, password: string) {
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
  const location = useLocation();
  const [method, setMethod] = useState("userCode");
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
        setLoging(true);
        await auth.signIn(values.userCode, values.password);
        localStorage.setItem("TOKEN", "MMIOMS");
        navigate("/", {
          replace: true,
        });
        return;
      } catch (err) {
        setLoging(false);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const [loging, setLoging] = useState(false);

  const handleMethodChange = useCallback((event, value) => {
    setMethod(value);
  }, []);

  const handleSkip = useCallback(() => {
    auth.skip();
    navigate("/", {
      replace: true,
    });
    return;
  }, [auth, location]);

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
                disabled={loging}
                startIcon={
                  loging ? <CircularProgress size={16} color="inherit" /> : ""
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

// Page.getLayout = (page) => {
//   page;
// };
document.title = "Login";
export default Page;
