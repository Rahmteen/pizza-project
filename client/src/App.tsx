import { Routes, Route } from "react-router-dom";

// pages
import Home from "@/pages/Home/Home";
import Admin from "@/pages/Admin/Admin";
import NotFound from "@/pages/NotFound/NotFound";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Register from "@/pages/Register/Register";

// wrappers
import TokenWrapper from "@/components/wrappers/TokenWrapper/TokenWrapper";

/**
 * @name App
 * @type {React.FC}
 * @description - a component to manage global wrappers, app routes and page rendering.
 * @return {React.ReactNode}
 */

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<TokenWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
