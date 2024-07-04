import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";

import { Dispatch, store } from "@/store/store";

interface RegisterButtonProps {
  token: string;
}

/**
 * @name RegisterButton
 * @type {React.FC<{RegisterButtonProps}>}
 * @description handle validation and api call for user registration.
 * @returns {React.ReactNode}
 */

const RegisterButton: React.FC<RegisterButtonProps> = ({ token }: RegisterButtonProps): React.ReactNode => {
  const dispatch = useDispatch<Dispatch>();
  const email: string = useSelector(store.select.registerModel.selectEmail);
  const firstName: string = useSelector(store.select.registerModel.selectFirstName);
  const lastName: string = useSelector(store.select.registerModel.selectLastName);
  const password: string = useSelector(store.select.registerModel.selectPassword);
  const confirmedPassword: string = useSelector(store.select.registerModel.selectConfirmedPassword);
  const isLoading: boolean = useSelector(store.select.registerModel.selectIsLoading);
  const isError: boolean = useSelector(store.select.registerModel.selectIsError);
  return (
    <Button
      colorScheme={isError ? "red" : "gray"}
      isLoading={isLoading}
      isDisabled={
        !password?.length ||
        !email?.length ||
        !firstName ||
        !lastName ||
        password !== confirmedPassword ||
        !token ||
        isError
      }
      onClick={() => {
        dispatch.registerModel.handleSignup([firstName, lastName, password, email, token]);
      }}
    >
      {isError ? "Error Registering" : "Register"}
    </Button>
  );
};

export default RegisterButton;
