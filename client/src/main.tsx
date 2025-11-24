import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import CarouselPage from "./pages/CarouselTestPage";
import HomePages from "./pages/HomePages";
import InspirationPage from "./pages/InspirationPage";

import Login from "./components/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MentionLegal from "./pages/MentionLegal";
import Seemore from "./pages/Seemore";
import UserProfile from "./pages/UserProfile";

/* ************************************************************************* */

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePages /> },
      { path: "mention-legal", element: <MentionLegal /> },
      { path: "inspiration", element: <InspirationPage /> },
      {
        path: "/",
        element: <HomePages />,
      },
      {
        path: "mention-legal",
        element: <MentionLegal />,
      },
      {
        path: "voyage/:id",
        element: <CarouselPage />,
      },
      {
        path: "see-more",
        element: <Seemore />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: (
          <Login
            onClose={(): void => {
              throw new Error("Function not implemented.");
            }}
          />
        ),
      },
      {
        path: "user-profile",
        element: <UserProfile />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Your HTML Document should contain a <div id='root'></div>");
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
