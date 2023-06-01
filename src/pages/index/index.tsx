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
import Grid from "@mui/material/Unstable_Grid2";
import OffersList from "./components/offers-list";
import DocList from "./components/doc-list";
import OverviewBudget from "./components/overview-budget";
import OverviewTotalCustomers from "./components/overview-total-customers";
import OverviewTasksProgress from "./components/overview-tasks-progress";
import OverviewTotalProfit from "./components/overview-total-profit";
import OverviewSales from "./components/overview-sales";
import OverviewTraffic from "./components/overview-traffic";

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
      <Typography component="h2" sx={{ my: 2, fontWeight: 600, fontSize: 24 }}>
        Overview
      </Typography>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} lg={3}>
          <OverviewBudget
            difference={12}
            positive
            sx={{ height: "100%" }}
            value="$24k"
          />
        </Grid>
        <Grid xs={12} sm={6} lg={3}>
          <OverviewTotalCustomers
            difference={16}
            positive={false}
            sx={{ height: "100%" }}
            value="1.6k"
          />
        </Grid>
        <Grid xs={12} sm={6} lg={3}>
          <OverviewTasksProgress sx={{ height: "100%" }} value={75.5} />
        </Grid>
        <Grid xs={12} sm={6} lg={3}>
          <OverviewTotalProfit sx={{ height: "100%" }} value="$15k" />
        </Grid>
        <Grid xs={12} lg={8}>
          <OverviewSales
            chartSeries={[
              {
                name: "This year",
                data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
              },
              {
                name: "Last year",
                data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
              },
            ]}
            sx={{ height: "100%" }}
          />
        </Grid>
        <Grid xs={12} lg={4}>
          <OverviewTraffic
            chartSeries={[63, 15, 22]}
            labels={["Pending", "In Progress", "Completed"]}
            sx={{ height: "100%" }}
          />
        </Grid>
      </Grid>
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
