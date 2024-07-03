import { useDispatch, useSelector } from "react-redux";

import { Dispatch, store } from "@/store/store";
import PasswordInput from "@/components/forms/PasswordInput/PasswordInput";
import PlainTextInput from "@/components/forms/PlainTextInput/PlainTextInput";

/**
 * @name LoginForm
 * @type {React.FC}
 * @description returns forms for password and email input on login page.
 * @returns {React.ReactNode}
 */

const LoginForm: React.FC = (): React.ReactNode => {
  const dispatch = useDispatch<Dispatch>();
  const isShowingPassword: boolean = useSelector(store.select.loginModel.selectIsShowingPassword);
  return (
    <>
      <PlainTextInput onChange={(e) => dispatch.loginModel.setEmail(e)} placeholder="Enter Email" />
      <PasswordInput
        onChange={(e) => dispatch.loginModel.setPassword(e)}
        placeholder="Enter password"
        isShowing={isShowingPassword}
        setIsShowing={() => dispatch.loginModel.setIsShowingPassword(!isShowingPassword)}
      />
    </>
  );
};

export default LoginForm;
