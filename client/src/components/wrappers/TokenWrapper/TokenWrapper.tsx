import { store } from "@/store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

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
