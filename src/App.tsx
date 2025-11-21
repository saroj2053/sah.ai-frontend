import AppLayout from "./layout/AppLayout";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: (
            <div className="container mt-6">
              <Home />
            </div>
          ),
        },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
    { path: "/app", element: <Chat /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
