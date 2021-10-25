import React, { useState } from "react";
import { Box, Paper, Grid, Button } from "@mui/material/";
import SideBar from "../SideBar/SideBar";

const CanvasCard = ({ number, addElementToRow, rowId, item }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [colId, setColId] = useState(1);
  const handleChange = (i) => {
    console.log("Itemmmmmmmmm ==>> ", item);
    setColId(i);
    setSideBarOpen(!sideBarOpen);
  };
  const createElement = () => {
    const temp = [];

    for (let i = 0; i < number; i++) {
      temp.push(
        item.elements[i].type && item.elements[i].type === "Title" ? (
          <div>
            <Paper
              elevation={1}
              sx={{
                width: number === 1 ? "1000px" : "500px",
                height: "100px",
                marginTop: "2rem",
              }}
            >
              {item.elements[i].value}
            </Paper>
          </div>
        ) : item.elements[i].type && item.elements[i].type === "Image" ? (
          <div>
            <Paper
              elevation={1}
              sx={{
                width: number === 1 ? "1000px" : "500px",
                height: "100px",
                marginTop: "2rem",
              }}
            >
              <img src={item.elements[i].value} width="100" height="100" />
            </Paper>
          </div>
        ) : (
          <div>
            <Paper
              elevation={1}
              sx={{
                width: number === 1 ? "1000px" : "500px",
                height: "70px",
                marginTop: "2rem",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  marginTop: number === 1 ? "1.5%" : "3%",
                }}
                onClick={() => handleChange(i)}
              >
                Add new element
              </Button>
            </Paper>
          </div>
        )
      );
    }
    return temp;
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <Grid container spacing={1} sx={{ textAlign: "center" }}>
          {createElement()}
        </Grid>
      </Box>
      {sideBarOpen ? (
        <SideBar
          type="Element"
          handleChange={handleChange}
          addElementToRow={addElementToRow}
          rowId={rowId}
          colId={colId}
        />
      ) : (
        " "
      )}
    </div>
  );
};

export default CanvasCard;
