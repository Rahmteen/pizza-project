import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { store } from "@/store/store";

interface TokenWrapper {
  children: React.ReactNode;
}

/**
 * @name TokenWrapper
 * @type {React.FC}
 *
 * @description Auth wrapper for the application.
 * handles verifying token status and navigation.
 * @returns {Outlet}
 */

const TokenWrapper = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const token = useSelector(store.select.tokenModel.selectToken);
  const isAdmin = useSelector(store.select.tokenModel.selectIsAdmin);

  useEffect(() => {
    if (token?.length > 0) {
      if (isAdmin) navigate("/admin");
      else if (!isAdmin) navigate("/dashboard");
    } else if (!pathname.includes("/register")) {
      navigate("/");
    }
  }, [token, pathname]);

  return <Outlet />;
};

export default TokenWrapper;
