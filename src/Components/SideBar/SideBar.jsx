import React, { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  Toolbar,
  Divider,
  IconButton,
  Grid,
  Paper,
  TextField,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import ImageIcon from "@mui/icons-material/Image";
import TitleIcon from "@mui/icons-material/Title";

import SideBarForm from "../SideBarForm/SideBarForm";

const drawerWidth = 280;
const rowData = [1, 2];
const elemData = [
  {
    type: "Title",
    icon: (
      <TitleIcon
        sx={{
          marginLeft: "40%",
          marginTop: "10%",
        }}
      />
    ),
  },
  {
    type: "Image",
    icon: (
      <ImageIcon
        sx={{
          marginLeft: "40%",
          marginTop: "10%",
        }}
      />
    ),
  },
];

const SideBarRow = ({
  handleChange,
  addRowToCanvas,
  type,
  addElementToRow,
  rowId,
  colId,
}) => {
  const [elemType, setElemType] = useState(false);
  const [rowDetails, setRowDetails] = useState({});

  const handleElemTypeOpen = (row, col, type) => {
    // console.log("data ==>> ", row, col, type);
    // addElementToRow(row, col, type);
    setRowDetails({
      row,
      col,
      type,
    });
    setElemType(true);
  };

  const handleElemTypeClose = () => {
    setElemType(false);
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
                <CloseIcon onClick={handleChange} />
              </IconButton>
            </Toolbar>
            <Divider />
            <Grid container>
              <Grid item xs={12}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "white",
                    display: "grid",
                    gridTemplateColumns: { md: "1fr 1fr" },
                    gap: 2,
                  }}
                >
                  {type === "Row"
                    ? rowData.map((item) => (
                        <Paper
                          key={item.id}
                          elevation={1}
                          sx={{
                            height: 80,
                            lineHeight: "60px",
                            display: "flex",
                            justifyContent: "space-betweem",
                            flexDirection: "column",
                            cursor: "pointer",
                          }}
                          onClick={() => addRowToCanvas(item)}
                        >
                          <AutoAwesomeMosaicIcon
                            sx={{
                              marginLeft: "40%",
                              marginTop: "10%",
                            }}
                          />
                          <div
                            style={{
                              marginLeft: "22%",
                              marginTop: "-5%",
                            }}
                          >
                            {item} Column
                          </div>
                        </Paper>
                      ))
                    : type === "Element"
                    ? elemData.map((item) => (
                        <Paper
                          key={item.type}
                          elevation={1}
                          sx={{
                            height: 80,
                            lineHeight: "60px",
                            display: "flex",
                            justifyContent: "space-betweem",
                            flexDirection: "column",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            handleElemTypeOpen(rowId, colId, item.type)
                          }
                        >
                          {item.icon}
                          <div
                            style={{
                              marginLeft: "35%",
                              marginTop: "-5%",
                            }}
                          >
                            {item.type}
                          </div>
                        </Paper>
                      ))
                    : ""}
                </Box>
              </Grid>
            </Grid>
          </Drawer>
          {elemType ? (
            <SideBarForm
              handleElemTypeClose={handleElemTypeClose}
              addElementToRow={addElementToRow}
              rowId={rowId}
              rowData={rowDetails}
            />
          ) : (
            ""
          )}
        </Box>
      </React.Fragment>
    </div>
  );
};

export default SideBarRow;
