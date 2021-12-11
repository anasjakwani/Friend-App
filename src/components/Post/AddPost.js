import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import AddPostForm from "./AddPostForm"

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button  aria-describedby={id} variant="contained" onClick={handleClick}>
        Add Post
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <AddPostForm sx={{ p: 4 }}/>
      </Popover>
    </div>
  );
}
