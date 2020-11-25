import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Inventory from "./views/Inventory";
import Warehouse from "./views/Warehouse";
import Auction from "./views/Auction";
import Users from "./views/Users";
import Settings from "./views/Settings";
import Messages from "./views/Messages";
import Finance from "./views/Finance";
import Orders from "./views/Orders";
import WarehouseTasks from "./views/WarehouseTasks";
import WarehouseSended from "./views/WarehouseSended";
import WarehouseOn from "./views/WarehouseOn";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/warehouse/tasks" />
  },
  {
    path: "/inventory",
    exact: true,
    layout: DefaultLayout,
    component: Inventory
  },
  {
    path: "/warehouse",
    exact: true,
    layout: DefaultLayout,
    component: Warehouse
  },
  {
    path: "/auction",
    exact: true,
    layout: DefaultLayout,
    component: Auction
  },
  {
    path: "/users",
    exact: true,
    layout: DefaultLayout,
    component: Users
  },
  {
    path: "/settings",
    exact: true,
    layout: DefaultLayout,
    component: Settings
  },
  {
    path: "/messages",
    exact: true,
    layout: DefaultLayout,
    component: Messages
  },
  {
    path: "/finance",
    exact: true,
    layout: DefaultLayout,
    component: Finance
  },
  {
    path: "/orders",
    exact: true,
    layout: DefaultLayout,
    component: Orders
  },
  {
    path: "/warehouse/tasks",
    layout: DefaultLayout,
    component: WarehouseTasks
  },
  {
    path: "/warehouse/sended",
    layout: DefaultLayout,
    component: WarehouseSended
  },
  {
    path: "/warehouse/on",
    layout: DefaultLayout,
    component: WarehouseOn
  }
];
