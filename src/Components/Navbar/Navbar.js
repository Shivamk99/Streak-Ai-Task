import React from "react";
import {
  AppBar,
  Box,
  Typography,
  Button,
  Divider,
  List,
  MenuItem,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ShareIcon from "@mui/icons-material/Share";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import HomeIcon from "@mui/icons-material/Home";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useStyles } from "./styles";

function Appbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

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
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

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

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#ffffff" }}>
        <Box display={"flex"} justifyContent={"space-between"} p={"15px"}>
          <Box ml={"18%"}>
            <Typography variant="h6" style={{ color: "#000000" }}>
              Audience Overview
            </Typography>
          </Box>

          <Box display={"flex"}>
            <Button
              className={classes.button}
              startIcon={<FolderSpecialIcon />}
            >
              Save
            </Button>
            <Button className={classes.button} startIcon={<SaveAltIcon />}>
              Export
            </Button>
            <Button className={classes.button} startIcon={<ShareIcon />}>
              Share
            </Button>
            <Divider orientation="vertical" />
            <Button className={classes.button} startIcon={<ChangeCircleIcon />}>
              Insights
            </Button>
          </Box>
        </Box>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Divider />
        <List>
          {["Home", "Customization"].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index % 2 === 0 ? <HomeIcon /> : <AppRegistrationIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
        <Button style={{ marginRight: "auto", color: "black" }}>Reports</Button>
        <List>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <AccessTimeIcon style={{ marginRight: "8px" }} />
              <Typography>Realtime</Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <PeopleAltIcon style={{ marginRight: "8px" }} />
              <Typography>Audience</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <MenuItem>Overview</MenuItem>
                <MenuItem>Active users</MenuItem>
                <MenuItem>Lifetime Value</MenuItem>
                <MenuItem>Cohort Analysis</MenuItem>
                <MenuItem>Audiences</MenuItem>
                <MenuItem>User Explorer</MenuItem>
              </List>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>DemoGraphics</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Interests</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Geo</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Behaviour</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Technology</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Mobile</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Crossdevice</Typography>
                </AccordionSummary>
              </Accordion>
            </AccordionDetails>
          </Accordion>
        </List>
      </Drawer>
    </Box>
  );
}

export default Appbar;
