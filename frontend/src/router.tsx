import { createHashRouter, RouterProvider } from "react-router-dom";
// import { lazy } from "react";
import Layout from "./Layout";

import LandingPage from "./routes/LandingPage";
import DiamondsPage from "./routes/diamonds";
import DiamondView from "./routes/diamondView";
import RingView from "./routes/ringView";

// const LandingPage = lazy(() => import("./routes/LandingPage"));
// const DiamondsPage = lazy(() => import("./routes/diamonds"));
// const DiamondView = lazy(() => import("./routes/diamondView"));
// const RingView = lazy(() => import("./routes/ringView"));

const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "",
        Component: LandingPage,
      },
      {
        path: "/diamonds",
        Component: DiamondsPage,
      },
      {
        path: "/rings/:id",
        Component: RingView,
      },
      {
        path: "/diamonds/:id",
        Component: DiamondView,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
