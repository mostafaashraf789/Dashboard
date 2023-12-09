import * as React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import ListItemText from "@mui/material/ListItemText";

import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";

import Typography from "@mui/material/Typography";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import TimelineIcon from "@mui/icons-material/Timeline";
import MapIcon from "@mui/icons-material/Map";
import Box from "@mui/material/Box";
import Tooltip from '@mui/material/Tooltip';
export default function sidee({
  handleDrawerClose,
  open,
  setOpen,
  theme,
  navigate,
  location,
}) {
  const drawerWidth = 240;

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

  const array1 = [
    { title: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
    { title: "Manage Team", icon: <GroupOutlinedIcon />, path: "/ManageTeam" },
    {
      title: "contacts Information",
      icon: <ContactsOutlinedIcon />,
      path: "/Contacts",
    },
    {
      title: "Invoices balances",
      icon: <ListAltOutlinedIcon />,
      path: "/InvoicesBalances",
    },
  ];

  const array2 = [
    { title: "Profile Form", icon: <Person2OutlinedIcon />, path: "/Profile" },
    { title: "calender", icon: <CalendarTodayIcon />, path: "/Calender" },
    { title: "FAQ Page", icon: <HelpOutlineIcon />, path: "/FAQpage" },
  ];
  const array3 = [
    { title: "Bar Chart", icon: <BarChartIcon />, path: "/Barchart" },
    { title: "Pie Chart", icon: <PieChartOutlineIcon />, path: "/Piechart" },
    { title: "Line Chart", icon: <TimelineIcon />, path: "/Linechart" },
    { title: "Geography Chart", icon: <MapIcon />, path: "/Geopraphy" },
  ];

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 1,
          mt: "10px",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="./74f25ebc-16a3-49f3-921f-954e82d53724-modified.png"
          sx={{
            width: open ? 80 : 40,
            height: open ? 80 : 40,
            border: "2px solid grey",
          }}
        />
        <Typography
          sx={{ fontWeight: "Bold", fontSize: open ? 17 : 0 }}
          variant="p"
        >
          mostafa ashraf
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontWeight: "Bold",
            fontSize: open ? 17 : 0,
            color: theme.palette.info.main,
          }}
        >
          Admin
        </Typography>
      </Box>

      <Divider />

      <List>
        {array1.map((text, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
         
         <Tooltip title={open? null :text.title}  placement="right">
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === text.path
                    ? theme.palette.bgBtn.main
                    : null,
              }}
              onClick={() => {
                navigate(text.path);
              }}
            >
          
         
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                

              {text.icon}

              </ListItemIcon>
           

              <ListItemText
                primary={text.title}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>

            </Tooltip>

          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {array2.map((text, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
          
          <Tooltip title={open? null :text.title}  placement="right">
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === text.path
                    ? theme.palette.bgBtn.main
                    : null,
              }}
              onClick={() => {
                navigate(text.path);
              }}
            >
             
            
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                

                {text.icon}
                
                
                

             
             
              </ListItemIcon>
              

              <ListItemText
                primary={text.title}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
            </Tooltip>


          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {array3.map((text, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
         
         <Tooltip title={open? null :text.title}  placement="right">
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === text.path
                    ? theme.palette.bgBtn.main
                    : null,
              }}
              onClick={() => {
                navigate(text.path);
              }}
            >
             
            
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                

{text.icon}

              </ListItemIcon>
            


              <ListItemText
                primary={text.title}
                sx={{ opacity: open ? 1 : 0 }}
              />
          
            </ListItemButton>
            </Tooltip>
            
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
