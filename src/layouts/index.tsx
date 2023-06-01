import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import {
  Link,
  Box,
  Container,
  IconButton,
  Switch,
  Menu,
  MenuItem,
  Typography,
  Toolbar,
  CssBaseline,
  Breadcrumbs,
  MenuList,
  ListItemIcon,
  ListItemText,
  List,
  ListSubheader,
  ListItem,
  ListItemButton,
  Collapse,
  Drawer,
  Divider,
} from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Menu as MenuIcon,
  AccountCircle,
  Cloud,
  MoveToInbox as InboxIcon,
  Drafts as DraftsIcon,
  Send as SendIcon,
  Mail as MailIcon,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from "@mui/icons-material";

import Sidebar from "./sidebar";
import { Outlet } from "react-router";
import { useRecoilState } from "recoil";
import { breadcrumbsState } from "@/store/breadcrumbs";
import BreadCrumb from "./breadcrumb";
import { useLocation, useNavigate } from "react-router-dom";
import ChangePwd from "@/components/change-pwd";
import LoadingMask from "@/components/loading-mask";
import { enqueueSnackbar } from "notistack";

const drawerWidth = 300;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
  width: `calc(100% - ${drawerWidth}px)`,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const [breadcrumbs, setBreadcrumbs] = useRecoilState(breadcrumbsState);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = React.useState(false);
  React.useEffect(() => {
    if (location.pathname !== "login" && !localStorage.getItem("TOKEN")) {
      navigate("/login", {
        replace: true,
      });
    } else {
      setIsLogin(true);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("TOKEN");
    navigate("/login", {
      replace: true,
    });

    enqueueSnackbar({
      message: "Log out",
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
  };

  const [showChangePwd, setShowChangePwd] = React.useState(false);
  const handleChangePwd = () => {
    //
    setShowChangePwd(true);
  };

  if (!isLogin) {
    return <LoadingMask />;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "purple",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            MMIOMS
          </Typography>

          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                <MenuItem onClick={handleChangePwd}>Change Password</MenuItem>
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography
            component="h2"
            sx={{
              textAlign: "center",
              width: "100%",
              fontFamily: "Merck",
              fontSize: 32,
              color: "#800080",
            }}
          >
            MMIOMS
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Sidebar />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        <BreadCrumb />

        <Outlet />
      </Main>
      <ChangePwd open={showChangePwd} onClose={() => setShowChangePwd(false)} />
    </Box>
  );
}
