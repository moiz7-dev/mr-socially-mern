import { Button, Drawer, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Fragment, useState } from "react";
import "./RightSidebar.scss";

const useStyles = makeStyles({
  paper: {
    width: "300px",
  },
});

const RightSidebar = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Fragment>
      <Button onClick={() => setOpenDrawer(true)}>Menu</Button>
      <Drawer
        classes={classes.paper}
        anchor='right'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <MenuItem>Option 1</MenuItem>
        <MenuItem>Option 2</MenuItem>
        <MenuItem>Option 3</MenuItem>
      </Drawer>
    </Fragment>
  );
};

export default RightSidebar;
