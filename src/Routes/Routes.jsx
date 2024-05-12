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
import PrivateRoute from "../Private/PrivateRoute";
import ContactUsPage from "../Pages/ContactUsPage/ContactUsPage";

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
          element:<PrivateRoute>
            <RoomDetailsPage />
          </PrivateRoute>
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contactUs',
          element: <ContactUsPage />
        },
        {
          path: '/signIn',
          element: <SignInPage />
        },
        {
          path: '/myList',
          element: <PrivateRoute>
            <MyListPage />
          </PrivateRoute>
        },
        {
          path: '/signUp',
          element:<SignUpPage />
        }
      ]
    },
]);

export default router;