import * as React from "react";
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
import { useRef } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app, analytics } from "../../firebase/Firebase";


const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const userNameRef=useRef(null)
  const userEmailRef=useRef(null)
  const userPassRef=useRef(null)

  const onButtonClick = () => {
    const userName=userNameRef.current.value;
    const email=userEmailRef.current.value;
    const password=userPassRef.current.value;
    const CreateUser = (email, password, navigate) => {
   
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
         navigate("/login/");
        })
    };
      CreateUser( email, password, navigate);
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
            Sign up
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  inputRef={userNameRef}
                  required
                  fullWidth
                  id="text"
                  label="User Name"
                  name="text"
                  autoComplete="text"
                  
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  inputRef={userEmailRef}
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
                  inputRef={userPassRef}
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
              onClick={onButtonClick}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RoutLink to="/login">
                  <Link variant="body2">Already have an account? Sign in</Link>
                </RoutLink>
              </Grid>
            </Grid>
          </Box>
          
        </Box>
      </Container>
    </ThemeProvider>
  );
}
