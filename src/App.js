import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ErrorPage from "./components/ErrorPage";
import BrowsePage from "./components/BrowsePage";
import GPTSearchPage from "./components/GPTSearchPage";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },

  {
    element: <AppLayout />,
    children: [
      {
        path: "/browse",
        element: (
          <ProtectedRoute>
            <BrowsePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/gpt",
        element: (
          <ProtectedRoute>
            <GPTSearchPage />{" "}
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
