import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Input } from "@mui/material";

import Stack from "@mui/material/Stack";
import Authcontext from "../../context/AuthContext";

export default function MediaCard() {
  const authLogout = useContext(Authcontext);
  const cardStyle = {
    borderRadius: "50%",
    width: "70px",
  };
  return (
    <>
      <Grid width="200px" height="242px">
        <Card sx={{ maxWidth: 345 }}>
          <Grid align="center">
            <CardContent>
              <CardMedia
                style={cardStyle}
                borderRadius="16px"
                component="img"
                height="70"
                image="data:image/png;base64,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"
                alt="green iguana"
              />
              <Stack alignItems="right">
                <label title="Change Profile Here" htmlFor="icon-button-file">
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    sx={{ display: "none" }}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Stack>

              <Typography gutterBottom variant="h5" component="div">
                Anas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                m.anasjakwani97
              </Typography>
            </CardContent>

            <CardActions>
              <Button onClick={authLogout.onLogout} size="small">
                Logout
              </Button>
            </CardActions>
          </Grid>
        </Card>
      </Grid>
    </>
  );
}
