import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import CarouselPage from "./pages/CarouselTestPage";
import HomePages from "./pages/HomePages";
import InspirationPage from "./pages/InspirationPage";

import About from "./pages/About";
import MentionLegal from "./pages/MentionLegal";
import Seemore from "./pages/Seemore";

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
        path: "egypt",
        element: <CarouselPage />,
      },
      {
        path: "see-more",
        element: <Seemore />,
      },
      {
        path: "about",
        element: <About />,
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
