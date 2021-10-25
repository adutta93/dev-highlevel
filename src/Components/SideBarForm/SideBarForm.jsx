import React, { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  Toolbar,
  Divider,
  IconButton,
  Grid,
  TextField,
  Button,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const drawerWidth = 280;

const SideBarForm = ({
  addElementToRow,
  handleElemTypeClose,
  rowId,
  rowData,
}) => {
  const [elemType, setElemType] = useState("");
  const [content, setContent] = useState("");

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleAdd = () => {
    // addElementToRow(rowId, content);
    addElementToRow(rowData.row, rowData.col, rowData.type, content);
    setContent("");
  };
  // console.log("Elem type", elemType);
  return (
    <div>
      <React.Fragment>
        <Box role="presentation">
          <Drawer
            sx={{
              width: drawerWidth,

              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                boxShadow: "0 10px 25px gainsboro",
              },
            }}
            variant="permanent"
            anchor="right"
          >
            <Toolbar>
              {" "}
              <IconButton aria-label="delete">
                <CloseIcon onClick={handleElemTypeClose} />
              </IconButton>
            </Toolbar>
            <Divider />
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChangeContent}
                  id="outlined-basic"
                  label="Content"
                  variant="outlined"
                />
              </Grid>
              <Button variant="contained" color="success" onClick={handleAdd}>
                Submit
              </Button>
            </Grid>
          </Drawer>
        </Box>
      </React.Fragment>
    </div>
  );
};

export default SideBarForm;
