import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar.tsx";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default App;
