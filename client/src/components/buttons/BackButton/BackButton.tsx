import { Button, Text } from "@chakra-ui/react";

interface BackButtonProps {
  onClick: () => void;
}

/**
 * @name BackButton
 * @type {React.FC<{BackButtonProps}>}
 * @param {Function} OnClick function to navigate back.
 *
 * @description button used in dashboard screens to navigate back home.
 * @returns {React.ReactNode}
 */

const BackButton: React.FC<BackButtonProps> = ({ onClick }: BackButtonProps): React.ReactNode => {
  return (
    <Button
      onClick={onClick}
      leftIcon={<Text as="i" fontSize="xs" className="fa-solid fa-arrow-left" />}
      size="sm"
      variant={"outline"}
      maxW="fit-content"
    >
      <Text fontFamily={"bricolage"}>back home</Text>
    </Button>
  );
};

export default BackButton;
