import AppLayout from "./layout/AppLayout";
import ChatPage from "./pages/ChatPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import useAuthStore from "./store/AuthStore";

function App() {
  const { authUser } = useAuthStore();

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: (
            <div className="container mt-6">
              <LandingPage />
            </div>
          ),
        },
        {
          path: "/login",
          element: authUser ? <Navigate to="/app" /> : <LoginPage />,
        },
        {
          path: "/register",
          element: authUser ? <Navigate to="/app" /> : <RegisterPage />,
        },
      ],
    },
    {
      path: "/app",
      element: authUser ? <ChatPage /> : <Navigate to="/login" />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
