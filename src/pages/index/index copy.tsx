import { useEffect, useState } from "react";

// import { Link } from "react-router-dom";

import {
  Link,
  Box,
  Container,
  AppBar,
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AccountCircle,
  Cloud,
  MoveToInbox as InboxIcon,
  Drafts as DraftsIcon,
  Send as SendIcon,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from "@mui/icons-material";

const getList = async () => {
  return new Promise((res) => {
    setTimeout(() => {
      const list = [];
      for (let i = 0; i < 20; i++) {
        list.push({
          id: i,
          name: Math.random().toString(32),
        });
      }
      // Math.ceil(Math.random() * 10000)
    }, 1000);
  });
};

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));

function App() {
  const [iconShow, setIconShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIconShow(!iconShow);
  };

  const getDatas = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    console.log("getDatas", new Date());
    const list = await getList();
    setList(list);
    setLoading(false);
  };

  useEffect(() => {
    console.log("getList", new Date());
    // () => getList();
    getDatas();
  }, []);

  useEffect(() => {
    setName("1");
  }, [count]);

  useEffect(() => {
    setCount(1);
  }, [name]);

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [sidebarWidth, setSidebarWidth] = useState(300);

  return (
    <>
      <CssBaseline />
      <List
        sx={{ width: sidebarWidth, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            MMIOMS
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={handleClick} selected>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
      <Container>
        <Box>
          <AppBar position="static">
            <Toolbar>
              {iconShow ? (
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon onClick={() => setIconShow(false)} />
                </IconButton>
              ) : (
                ""
              )}
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Dashboard
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
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MMIOMS
        </Link>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Dashboard</Typography>
      </Breadcrumbs>
      <div>
        <h1>Index</h1>
        <ul>
          <Link underline="hover" color="inherit" href="/orders">
            Orders
          </Link>
        </ul>
      </div>
    </>
  );
}

export default App;
