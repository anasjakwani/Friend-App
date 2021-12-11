import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RoutLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app, analytics } from "../../firebase/Firebase";
import Authcontext from "../../context/AuthContext";


const theme = createTheme();


export default function Login() {
  const authLogin = useContext(Authcontext)
  
  let navigate = useNavigate();
  const LoginAuth = (email, password, navigate) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        authLogin.onLogin()
        navigate("/home/");
      })
      .catch((error) => {
        let err = error.code;
        console.log(err);
      });
  };
  const auth = (e) => {
    e.preventDefault();
    LoginAuth(email, password, navigate);
  };

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const passHandler = (e) => {
    setpassword(e.target.value);
    console.log(password);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={emailHandler}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={passHandler}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              onClick={auth}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RoutLink to="/">
                  <Link variant="body2">Don't have Account? SignUp</Link>
                </RoutLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
