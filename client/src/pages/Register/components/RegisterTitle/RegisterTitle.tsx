import { Text } from "@chakra-ui/react";

/**
 * @name RegisterTitle
 * @type {React.FC}
 * @description title text for register form.
 * @returns {React.ReactNode}
 */

const RegisterTitle: React.FC = (): React.ReactNode => {
  return <Text fontFamily="bricolage" fontWeight={700} fontSize={"2xl"} children={"Register"} />;
};

export default RegisterTitle;
