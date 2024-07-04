import { Text } from "@chakra-ui/react";

/**
 * @name LoginTitle
 * @type {React.FC}
 * @description title text for login form.
 * @returns {React.ReactNode}
 */

const LoginTitle: React.FC = (): React.ReactNode => {
  return <Text fontFamily="bricolage" fontWeight={700} fontSize={{ base: "21px", lg: "3xl" }} children={"Login"} />;
};

export default LoginTitle;
