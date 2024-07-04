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
  const email = useSelector(store.select.registerModel.selectEmail);
  const firstName = useSelector(store.select.registerModel.selectFirstName);
  const lastName = useSelector(store.select.registerModel.selectLastName);
  const password = useSelector(store.select.registerModel.selectPassword);
  const confirmedPassword = useSelector(store.select.registerModel.selectConfirmedPassword);

  return (
    <Button
      isDisabled={
        !password?.length || !email?.length || !firstName || !lastName || password !== confirmedPassword || !token
      }
      onClick={() => {
        dispatch.registerModel.handleSignup([firstName, lastName, password, email, token]);
      }}
    >
      Register
    </Button>
  );
};

export default RegisterButton;
