import { Dispatch } from "@/store/store";
import { Button, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

/**
 * @name LogoutButton
 * @type {React.FC}
 * @description logs a user out upon click.
 * @returns {React.ReactNode}
 */

const LogoutButton: React.FC = (): React.ReactNode => {
  const dispatch = useDispatch<Dispatch>();
  return (
    <Button
      onClick={() => dispatch.tokenModel.clearState()}
      colorScheme="blackAlpha"
      rounded="md"
      size="sm"
      leftIcon={<Text as="i" fontSize={"xs"} className="fa-sharp fa-solid fa-arrow-left-from-bracket" />}
    >
      Sign Out
    </Button>
  );
};

export default LogoutButton;
