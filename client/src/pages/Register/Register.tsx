import FormPageLayout from "@/components/wrappers/FormPageLayout/FormPageLayout";
import RegisterTitle from "@/pages/Register/components/RegisterTitle/RegisterTitle";
import RegisterForm from "@/pages/Register/components/RegisterForm/RegisterForm";
import RegisterButton from "@/pages/Register/components/RegisterButton/RegisterButton";

/**
 * @name Register
 * @type {React.FC}
 * @description '/register' - registration page for invited users
 * @returns {React.ReactNode}
 */

const Register = () => {
  return (
    <FormPageLayout>
      <RegisterTitle />
      <RegisterForm />
      <RegisterButton />
    </FormPageLayout>
  );
};

export default Register;
