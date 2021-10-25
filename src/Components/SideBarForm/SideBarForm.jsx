import React, { useState } from "react";
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

const SideBarForm = ({ addElementToRow, handleElemTypeClose, rowData }) => {
  const [content, setContent] = useState("");

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleAdd = () => {
    addElementToRow(rowData.row, rowData.col, rowData.type, content);
    setContent("");
  };
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
                  sx={{ mt: 1, ml: 2 }}
                />
                <TextField
                  onChange={handleChangeContent}
                  id="outlined-basic"
                  label="Just a place holder"
                  variant="outlined"
                  disabled
                  sx={{ mt: 1, ml: 2 }}
                />
              </Grid>
              <Button
                variant="contained"
                color="success"
                onClick={handleAdd}
                sx={{ mt: 1.5, ml: 2 }}
              >
                Submit
              </Button>
              <div
                style={{
                  wordWrap: "break-word",
                  marginTop: "1.5rem",
                  marginLeft: "1rem",
                }}
              >
                <p
                  style={{
                    fontWeight: "700",
                  }}
                >
                  Use this image link for test:
                </p>{" "}
                https://randomuser.me/api/
                <p style={{ lineHeight: "-1rem" }}>portraits/men/75.jpg</p>
              </div>
            </Grid>
          </Drawer>
        </Box>
      </React.Fragment>
    </div>
  );
};

export default SideBarForm;
