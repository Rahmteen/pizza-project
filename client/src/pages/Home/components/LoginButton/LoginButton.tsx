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
  const isLoading: boolean = useSelector(store.select.loginModel.selectIsLoading);
  const isError: boolean = useSelector(store.select.loginModel.selectIsError);
  return (
    <Button
      colorScheme={isError ? "red" : "gray"}
      isLoading={isLoading}
      isDisabled={!email?.length || !password.length || isError}
      onClick={() => dispatch.loginModel.handleLogin([email, password])}
    >
      {isError ? "Login Error" : "Login"}
    </Button>
  );
};

export default LoginButton;
