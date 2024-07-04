import { Text } from "@chakra-ui/react";

/**
 * @name LoginFooter
 * @type {React.FC}
 * @description footer text for login form.
 * @returns {React.ReactNode}
 */

const LoginFooter: React.FC = (): React.ReactNode => {
  return (
    <Text
      maxW={{ base: "60%", lg: "100%" }}
      mx="auto"
      color="blackAlpha.500"
      textAlign={"center"}
      fontFamily="bricolage"
      fontWeight={300}
      fontSize={"xs"}
      mt={1}
    >
      Dont have an account?{"  "}
      <Text as="span" color="blackAlpha.700">
        Ask your partner for an invite!
      </Text>
    </Text>
  );
};

export default LoginFooter;
