import * as React from "react";
import { styled } from "@mui/material/styles";
import Logo from "../../Assest/logo.png";

import {
  Box,
  Button,
  ButtonGroup,
  List,
  Divider,
  ListItem,
  ListItemText,
} from "@mui/material/";
import MuiDrawer from "@mui/material/Drawer";

import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AddIcon from "@mui/icons-material/Add";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent">
        <DrawerHeader>
          {" "}
          <div>
            {" "}
            <img
              src={Logo}
              alt=""
              width="40"
              height="40"
              style={{
                marginBottom: "6rem",
                marginRight: "-2.7rem",
                marginTop: "1.7rem",
              }}
            />
          </div>
          <ButtonGroup
            variant="text"
            aria-label="outlined button group"
            sx={{
              backgroundColor: "#00d10e",
              mr: 1,
              mt: 10,
              mb: 2,
            }}
          >
            <Button size="small">
              <AddIcon
                sx={{
                  fontSize: 17,
                  color: "white",
                  height: "1.5rem",
                  border: " white",
                }}
              />
            </Button>
          </ButtonGroup>
        </DrawerHeader>

        <List
          sx={{
            ml: 1,
          }}
        >
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List
          sx={{
            ml: 1,
          }}
        >
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
