import { PizzaIngredientValue } from "@/store/types";
import { RadioGroup, Radio, Flex, Text } from "@chakra-ui/react";

interface PizzaIngredientRadioGroupProps {
  setValue: (el: PizzaIngredientValue) => void;
  value: PizzaIngredientValue;
  name: string;
}

/**
 * @name PizzaIngredientRadioGroup
 * @type {React.FC<{ PizzaIngredientRadioGroupProps }>}
 * @param {Function} setValue sets pizza ingredient value upon change
 * @param {string} value current value of the pizza ingredient
 * @param {string} name name of the radio title
 *
 * @description form item used to handle user input for changing
 * pizza ingredient values when ordering.
 * @returns {React.ReactNode}
 */

const PizzaIngredientRadioGroup: React.FC<PizzaIngredientRadioGroupProps> = ({
  setValue,
  value,
  name,
}: PizzaIngredientRadioGroupProps): React.ReactNode => {
  return (
    <Flex w="full" bg="blackAlpha.50" px={3} py={2} justifyContent={"space-between"}>
      <Text maxW="20%" fontFamily={"bricolage"}>
        {name}
      </Text>
      <RadioGroup
        width={{ lg: "50%" }}
        onChange={(el: string) => {
          const parsedValue = parseInt(el) as PizzaIngredientValue;
          setValue(parsedValue);
        }}
        value={value.toString()}
      >
        <Flex pr={2.5} justifyContent={"space-between"}>
          <Radio rounded="none" borderColor="gray.500" value="0">
            None
          </Radio>
          <Radio rounded="none" borderColor="gray.500" value="1">
            Regular
          </Radio>
          <Radio rounded="none" borderColor="gray.500" value="2">
            Extra
          </Radio>
        </Flex>
      </RadioGroup>
    </Flex>
  );
};

export default PizzaIngredientRadioGroup;
