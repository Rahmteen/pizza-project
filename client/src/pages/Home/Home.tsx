import FormPageLayout from "@/components/wrappers/FormPageLayout/FormPageLayout";
import LoginTitle from "@/pages/Home/components/LoginTitle/LoginTitle";
import LoginForm from "@/pages/Home/components/LoginForm/LoginForm";
import LoginButton from "@/pages/Home/components/LoginButton/LoginButton";
import LoginFooter from "@/pages/Home/components/LoginFooter/LoginFooter";

/**
 * @name Home
 * @type {React.FC}
 * @description '/' - home page for user login.
 * @returns {React.ReactNode}
 */

const Home = () => {
  return (
    <FormPageLayout>
      <LoginTitle />
      <LoginForm />
      <LoginButton />
      <LoginFooter />
    </FormPageLayout>
  );
};

export default Home;
