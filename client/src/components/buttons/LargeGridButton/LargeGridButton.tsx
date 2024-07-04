import { GridItem, Stack, Text } from "@chakra-ui/react";

interface LargeGridButtonProps {
  onClick: () => void;
  color: string;
  icon: string;
  title: string;
}

/**
 * @name LargeGridButton
 * @type {React.FC<{ LargeGridButtonProps }>}
 * @param {Function} onClick handles action when button is clicked
 * @param {string} color background color of the grid item
 * @param {string} icon fontawesome className for icon
 * @param {string} title text value within button
 *
 * @description large grid button used in the landing page of
 * '/dashboard' and '/admin' pages.
 * @returns {React.ReactNode}
 */

const LargeGridButton: React.FC<LargeGridButtonProps> = ({
  onClick,
  color,
  icon,
  title,
}: LargeGridButtonProps): React.ReactNode => {
  return (
    <GridItem
      rounded="xl"
      cursor={"pointer"}
      alignItems={"center"}
      justifyContent={"center"}
      as={Stack}
      tabIndex={0}
      _hover={{ opacity: "80%" }}
      transition={"0.3s all ease-in-out"}
      bg={color}
      className="box-shadow-1"
      aspectRatio={1}
      onClick={onClick}
    >
      <Stack gap={5} alignItems={"center"}>
        <Text fontSize={"4xl"} color="white" as="i" className={icon} />
        <Text fontWeight={400} fontSize={"3xl"} color="white" fontFamily={"bricolage"}>
          {title}
        </Text>
      </Stack>
    </GridItem>
  );
};

export default LargeGridButton;
