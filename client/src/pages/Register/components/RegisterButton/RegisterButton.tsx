import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";

import { Dispatch, store } from "@/store/store";

/**
 * @name RegisterButton
 * @type {React.FC}
 * @description handle validation and api call for user registration.
 * @returns {React.ReactNode}
 */

const RegisterButton: React.FC = (): React.ReactNode => {
  const dispatch = useDispatch<Dispatch>();
  const email = useSelector(store.select.registerModel.selectEmail);
  const firstName = useSelector(store.select.registerModel.selectFirstName);
  const lastName = useSelector(store.select.registerModel.selectLastName);
  const password = useSelector(store.select.registerModel.selectPassword);
  const confirmedPassword = useSelector(store.select.registerModel.selectConfirmedPassword);

  return (
    <Button
      isDisabled={!password?.length || !email?.length || !firstName || !lastName || password !== confirmedPassword}
      onClick={() => {
        //todo: set up signup
        dispatch.registerModel.handleSignup([firstName, lastName, password, email, ""]);
      }}
    >
      Register
    </Button>
  );
};

export default RegisterButton;
