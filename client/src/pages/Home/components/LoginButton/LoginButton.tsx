import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";

import { Dispatch, store } from "@/store/store";

/**
 * @name LoginButton
 * @type {React.FC}
 * @description handle validation and api call for user login.
 * @returns {React.ReactNode}
 */

const LoginButton: React.FC = (): React.ReactNode => {
  const dispatch = useDispatch<Dispatch>();
  const email: string = useSelector(store.select.loginModel.selectEmail);
  const password: string = useSelector(store.select.loginModel.selectPassword);
  return (
    <Button
      isDisabled={!email?.length || !password.length}
      onClick={() => dispatch.loginModel.handleLogin([email, password])}
    >
      Login
    </Button>
  );
};

export default LoginButton;
