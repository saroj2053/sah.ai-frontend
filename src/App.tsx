import AppLayout from "./layout/AppLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <>Welcome to Home Page</> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
