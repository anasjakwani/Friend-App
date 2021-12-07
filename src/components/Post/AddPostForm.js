import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button, CardActions, Input } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Box component="form" noValidate autoComplete="off">
          <FormControl sx={{ width: "30ch" }}>
            <OutlinedInput components={TextareaAutosize} placeholder="Write SomeThing Here" />
            <Stack direction="row" alignItems="center" spacing={2}>
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </label>
            </Stack>
          </FormControl>
        </Box>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary">
          Post
        </Button>
      </CardActions>
    </Card>
  );
}
