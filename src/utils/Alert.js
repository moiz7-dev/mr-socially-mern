import React, { useState } from "react";
import Snackbar from '@mui/material/Snackbar';

const Alert = ({message}) => {
    const [open, setOpen] = useState(true);
  return (
      <Snackbar
        open={open}
        autoHideDuration={4000}
        message={message}
        onClose={() => setOpen(false)}
      />
  );
};

export default Alert;
