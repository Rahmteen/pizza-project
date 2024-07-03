import { Dispatch, store } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

import PasswordInput from "@/components/forms/PasswordInput/PasswordInput";
import PlainTextInput from "@/components/forms/PlainTextInput/PlainTextInput";

/**
 * @name RegisterForm
 * @type {React.FC}
 * @description returns forms for password, first/last name and email input on register page.
 * @returns {React.ReactNode}
 */

const RegisterForm = () => {
  const dispatch = useDispatch<Dispatch>();
  const isShowingPassword = useSelector(store.select.registerModel.selectIsShowingPassword);
  const isShowingConfirmedPassword = useSelector(store.select.registerModel.selectIsShowingConfirmedPassword);
  return (
    <>
      <PlainTextInput onChange={(e) => dispatch.registerModel.setEmail(e)} placeholder="Enter Email" />
      <PlainTextInput onChange={(e) => dispatch.registerModel.setFirstName(e)} placeholder="First Name" />
      <PlainTextInput onChange={(e) => dispatch.registerModel.setLastName(e)} placeholder="Last Name" />
      <PasswordInput
        onChange={(e) => dispatch.registerModel.setPassword(e)}
        placeholder="Enter password"
        isShowing={isShowingPassword}
        setIsShowing={() => dispatch.registerModel.setIsShowingPassword(!isShowingPassword)}
      />
      <PasswordInput
        onChange={(e) => dispatch.registerModel.setConfirmedPassword(e)}
        placeholder="Confirm password"
        isShowing={isShowingConfirmedPassword}
        setIsShowing={() => dispatch.registerModel.setIsShowingConfirmedPassword(!isShowingConfirmedPassword)}
      />
    </>
  );
};

export default RegisterForm;
