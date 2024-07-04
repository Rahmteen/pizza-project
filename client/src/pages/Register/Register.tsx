import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import FormPageLayout from "@/components/wrappers/FormPageLayout/FormPageLayout";
import RegisterTitle from "@/pages/Register/components/RegisterTitle/RegisterTitle";
import RegisterForm from "@/pages/Register/components/RegisterForm/RegisterForm";
import RegisterButton from "@/pages/Register/components/RegisterButton/RegisterButton";
import RegisterFooter from "@/pages/Register/components/RegisterFooter/RegisterFooter";

/**
 * @name Register
 * @type {React.FC}
 * @description '/register' - registration page for invited users
 * @returns {React.ReactNode}
 */

const Register = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [localToken, setLocalToken] = useState("");

  useEffect(() => {
    const parameters = new URLSearchParams(search);
    const token = parameters.get("token");
    if (token?.length) setLocalToken(token);
    else {
      navigate("/");
    }
  }, []);
  return (
    <FormPageLayout>
      <RegisterTitle />
      <RegisterForm />
      {localToken && <RegisterButton token={localToken} />}
      <RegisterFooter />
    </FormPageLayout>
  );
};

export default Register;
