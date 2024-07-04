import { RadioGroup, Radio, Flex, Text } from "@chakra-ui/react";
import { PizzaSize } from "@/store/types";

interface PizzaSizeRadioGroupProps {
  setValue: (el: PizzaSize) => void;
  value: PizzaSize;
  name: string;
}

/**
 * @name PizzaSizeRadioGroup
 * @type {React.FC<{ PizzaSizeRadioGroupProps }>}
 * @param {Function} setValue sets pizza size upon change
 * @param {string} value current value of the pizza size
 * @param {string} name name of the radio title
 *
 * @description form item used to handle user input for changing
 * pizza size when ordering.
 * @returns {React.ReactNode}
 */

const PizzaSizeRadioGroup: React.FC<PizzaSizeRadioGroupProps> = ({
  setValue,
  value,
  name,
}: PizzaSizeRadioGroupProps): React.ReactNode => {
  return (
    <Flex w="full" bg="blackAlpha.50" px={3} py={2} justifyContent={"space-between"}>
      <Text maxW="20%" fontFamily={"bricolage"}>
        {name}
      </Text>
      <RadioGroup
        width={{ lg: "50%" }}
        onChange={(el: string) => {
          if (el === "SM" || el === "MD" || el === "LG") setValue(el);
        }}
        value={value}
      >
        <Flex justifyContent={"space-between"}>
          <Radio value="SM">Small</Radio>
          <Radio value="MD">Medium</Radio>
          <Radio value="LG">Large</Radio>
        </Flex>
      </RadioGroup>
    </Flex>
  );
};

export default PizzaSizeRadioGroup;
