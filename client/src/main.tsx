import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import HomePages from "./pages/HomePages";
import InspirationPage from "./pages/InspirationPage"; // 👈 importe ta page
import MentionLegal from "./pages/MentionLegal";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePages /> },
      { path: "mention-legal", element: <MentionLegal /> },
      { path: "inspiration", element: <InspirationPage /> }, // 👈 nouvelle route
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
