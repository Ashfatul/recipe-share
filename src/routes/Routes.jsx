import { createBrowserRouter } from "react-router-dom";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes/ChefRecipes";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Home from "../pages/Home/Home/Home";
import Layout from "../layouts/Layout";
import Error404 from "../pages/Error404/Error404";
import Blog from "../pages/Blog/Blog";
import Search from "../pages/Search/Search";
import PrivateRoute from "./PrivateRoute";
import GuestRoute from "./GuestRoute";
const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,

      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "login",
            element: (
               <GuestRoute>
                  {" "}
                  <Login></Login>
               </GuestRoute>
            ),
         },
         {
            path: "blog",
            element: <Blog />,
            loader: () =>
               fetch("https://recipe-share-server.vercel.app//blogs"),
         },
         {
            path: "register",
            element: (
               <GuestRoute>
                  <Register></Register>
               </GuestRoute>
            ),
         },
         {
            path: "chef",
            children: [
               {
                  path: ":id",
                  element: (
                     <PrivateRoute>
                        <ChefRecipes />
                     </PrivateRoute>
                  ),
               },
            ],
         },
         {
            path: "search",
            element: <Search />,
            children: [
               {
                  path: ":query",
                  element: <Search />,
               },
            ],
         },
         {
            path: "*",
            element: <Error404 />,
         },
      ],
   },
]);

export default router;
