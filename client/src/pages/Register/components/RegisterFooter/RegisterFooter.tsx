import { Text } from "@chakra-ui/react";

/**
 * @name RegisterFooter
 * @type {React.FC}
 * @description footer text for register form.
 * @returns {React.ReactNode}
 */

const RegisterFooter: React.FC = (): React.ReactNode => {
  return (
    <Text
      maxW={{ base: "100%", lg: "100%" }}
      mx="auto"
      color="blackAlpha.500"
      textAlign={"center"}
      fontFamily="bricolage"
      fontWeight={300}
      fontSize={{ base: "2xs", lg: "xs" }}
      mt={1}
    >
      By clicking Register you agree to the <br /> Tomato of Service and Pepperoni Policy
    </Text>
  );
};

export default RegisterFooter;
