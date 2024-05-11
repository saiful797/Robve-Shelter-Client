import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home/Home";
import SignInPage from "../Pages/SignInPage/SignInPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import RoomsPage from "../Pages/AllRoomsPage/RoomsPage";
import RoomDetailsPage from "../Pages/RoomDetailsPage/RoomDetailsPage";
import About from "../Pages/AboutPage/About";
import MyListPage from "../Pages/MyListPage/MyListPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element:<Home />
        },
        {
          path: '/rooms',
          element:<RoomsPage />
        },
        {
          path: '/roomDetails/:id',
          element: <RoomDetailsPage />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/signIn',
          element: <SignInPage />
        },
        {
          path: '/myList',
          element: <MyListPage />
        },
        {
          path: '/signUp',
          element:<SignUpPage />
        }
      ]
    },
]);

export default router;