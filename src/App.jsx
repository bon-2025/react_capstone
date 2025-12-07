import React from "react";
import { Routes, Route } from "react-router-dom";

import DynamicNavbar from "./components/Navbar";
import { navItems } from "./config/navItems";
import { generateRoutes } from "./routes/generateRoutes";

function App() {
  const userRole = "admin"; // later from auth

  const routes = generateRoutes(navItems[userRole]);

  return (
    <>
      <DynamicNavbar userRole={userRole} />

      <Routes>
        {routes.map((r, i) => (
          <Route key={i} path={r.path} element={r.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
