import {
  Alert,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../../firebase/config";
import { withAuth } from "../../auth/ProtectRoute";
import { CheckCircleOutline } from "@mui/icons-material";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Email is invalid format.")
    .required("Please enter your email."),
  password: yup.string().required("Please enter your password"),
});

function LoginPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setSuccess(true);
        setError("");
        router.push("/questionaire");
      } catch (err) {
        setSuccess(false);
        setError("Invalid email or password");
      }
    },
  });
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "none-repeat",
          filter: "blur(15px)",
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Paper
            sx={{
              padding: "3rem",
              background: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              width: "95%",
              maxWidth: "500px",
              margin: "auto",
            }}
          >
            <img src="/foxbith.png" alt="Foxbith" width={250} />
            <Typography
              sx={{
                fontSize: 25,
                fontWeight: "600",
                color: "Black",
                lineHeight: 1,
              }}
            >
              Sign in
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: "1rem",
                height: "10rem",
                gap: 3,
              }}
            >
              {/* Email */}
              <TextField
                id="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                fullWidth
                sx={{ width: "20rem" }}
              />
              {/* Password */}
              <TextField
                type="password"
                id="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                fullWidth
              />
            </Box>
            {error && (
              <Typography
                sx={{
                  color: "red",
                  marginTop: "1rem",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: "2rem",
                width: "50%",
                height: "3rem",
                background: "#e25328",
              }}
              disabled={formik.isSubmitting}
            >
              Log in
            </Button>
          </Paper>
        </form>
      </Box>
    </Box>
  );
}

export default withAuth(LoginPage);
