import { Button, Drawer, MenuItem } from "@mui/material";
import React, { Fragment, useState } from "react";
import './RightSidebar.scss';

const RightSidebar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Fragment>
      <Button onClick={() => setOpenDrawer(true)}>Menu</Button>
      <Drawer
        anchor="right"
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
