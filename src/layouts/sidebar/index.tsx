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
  Cloud as CloudIcon,
  MoveToInbox as InboxIcon,
  Drafts as DraftsIcon,
  Send as SendIcon,
  Mail as MailIcon,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router";
import WidgetsIcon from "@mui/icons-material/Widgets";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import ArticleIcon from "@mui/icons-material/Article";
import GradingIcon from "@mui/icons-material/Grading";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SummarizeIcon from '@mui/icons-material/Summarize';
import TimelineIcon from '@mui/icons-material/Timeline';
import ApprovalIcon from '@mui/icons-material/Approval';

interface IMenu {
  name: string;
  path?: string;
  icon?: JSX.Element;
  children?: IMenu[];
}

const ItemRender = ({ menu, pl }: { menu: IMenu; pl?: number }) => {
  if (!pl) {
    pl = 2;
  }
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleMenuItemClick = (menuItem: IMenu) => {
    console.log("handleMenuItemClick", open);
    if (menuItem.children && menuItem.children.length) {
      setOpen(!open);
      return;
    }
    if (menuItem.path) {
      navigate(menuItem.path, {
        // replace: true,
      });
      return;
    }
    return;
  };

  return (
    <Fragment key={menu.name}>
      <ListItem key={menu.name} disablePadding>
        <ListItemButton
          onClick={() => handleMenuItemClick(menu)}
          sx={{ pl: pl }}
        >
          <ListItemIcon>{menu.icon ? menu.icon : ""}</ListItemIcon>
          <ListItemText primary={menu.name} />
          {menu.children && menu.children.length ? (
            open ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )
          ) : (
            ""
          )}
        </ListItemButton>
      </ListItem>
      {menu.children && menu.children.length ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <ListRender list={menu.children} pl={pl + 4} />
        </Collapse>
      ) : (
        ""
      )}
    </Fragment>
  );
};

const ListRender = ({ list, pl }: { list: IMenu[]; pl?: number }) => {
  if (!pl) {
    pl = 2;
  }
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleMenuItemClick = (menuItem: IMenu) => {
    console.log("handleMenuItemClick", open);
    if (menuItem.children && menuItem.children.length) {
      setOpen(!open);
      return;
    }
    if (menuItem.path) {
      navigate(menuItem.path, {
        replace: true,
      });
      return;
    }
    return;
  };
  return (
    <List>
      {list.map((menu) => (
        <ItemRender key={menu.name} menu={menu} pl={pl} />
      ))}
    </List>
  );
};

const App = () => {
  const menus: IMenu[] = [
    {
      path: "/",
      name: "Home",
      icon: <HomeIcon />,
    },
    {
      path: "/",
      name: "Masters",
      icon: <WidgetsIcon />,
      children: [
        {
          path: "/",
          name: "Master List",
          icon: <BedroomParentIcon />,
          children: [
            {
              path: "/masters/products",
              name: "Products",
              icon: <ArticleIcon />,
            },
            {
              path: "/masters/product-wise-toll-center",
              name: "Product Wise Toll Center",
              icon: <ArticleIcon />,
            },
          ],
        },
      ],
    },

    {
      path: "/orders",
      name: "Orders",
      icon: <ProductionQuantityLimitsIcon />,
      children: [
        {
          path: "/orders/approval",
          name: "Pending For My Approval",
          icon: <ApprovalIcon />,
        },
        {
          path: "/orders/history",
          name: "Order History",
          icon: <TimelineIcon />,
        },
      ],
    },
    {
      path: "/",
      name: "MIS",
      icon: <LocalShippingIcon />,
      children: [
        {
          path: "/",
          name: "Orders",
          icon: <ProductionQuantityLimitsIcon />,
        },
        {
          path: "/",
          name: "Invoices",
          icon: <SummarizeIcon />,
        },
      ],
    },
  ];

  return (
    <>
      <ListRender list={menus} />
    </>
  );
};

export default App;
