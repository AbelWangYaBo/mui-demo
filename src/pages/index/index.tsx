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

import Divider from "@mui/material/Divider";

import OffersList from "./components/offers-list";
import DocList from "./components/doc-list";

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

function App() {
  return (
    <>
      <div>
        <OffersList />
        <Divider
          style={{
            marginTop: 15,
            marginBottom: 15,
          }}
        />
        <DocList />
      </div>
    </>
  );
}

export default App;
