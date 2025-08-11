// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Landing from "../pages/Landing";

const Blog = lazy(() => import("../pages/Ecommerce/blog/Blog"));
const EcommerceLayout = lazy(() => import("../components/EcommerceLayout"));
const Home = lazy(() => import("../pages/Ecommerce/Home"));
const About = lazy(() => import("../pages/Ecommerce/About"));
const Contact = lazy(() => import("../pages/Ecommerce/Contact"));
const Shop = lazy(() => import("../pages/Ecommerce/Shop"));
const Clothes = lazy(() => import("../pages/Ecommerce/Clothes"));
const ViewShopById = lazy(() => import("../pages/Ecommerce/details/ViewShopById"));
const ViewClothBySlug = lazy(() => import("../pages/Ecommerce/details/ViewClothBySlug"));
// 

export const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/e-commerce",
    element: <EcommerceLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "clothes",
        element: <Clothes />,
      },
      {
        path: "shop/:id",
        element: <ViewShopById />,
      },
      {
        path: "clothe/:slug",
        element: <ViewClothBySlug />,
      },
    ],
  },
]
);
