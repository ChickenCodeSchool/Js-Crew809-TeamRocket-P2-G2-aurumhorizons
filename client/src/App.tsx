import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar.tsx";

import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClose = () => setShowLogin(false);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>
        <Outlet />
        {showLogin && <Login onClose={handleLoginClose} />}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
