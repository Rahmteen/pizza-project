import { useDispatch, useSelector } from "react-redux";
import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { Dispatch, store } from "@/store/store";
import { pizzaFormPropsHelper } from "@/utils/pizzaFormPropsHelper";

import PizzaIngredientRadioGroup from "@/components/forms/PizzaIngredientRadioGroup/PizzaIngredientRadioGroup";
import PizzaSizeRadioGroup from "@/components/forms/PizzaSizeRadioGroup/PizzaSizeRadioGroup";

/**
 * @name DashboardNewOrderForm
 * @type {React.FC}
 * @description handles mapping the current state and returnings values.
 * these mappings are used to render new order form elements for the user. This screen is visible
 * when the dashboard state is set to NEW_ORDER.
 * @returns {React.ReactNode}
 */

const DashboardNewOrderForm: React.FC = (): React.ReactNode => {
  const dispatch = useDispatch<Dispatch>();
  const pizzaIngredientValues = useSelector(store.select.dashboardModel.selectState);
  const { pizzaSizeProps, sauceAndCheeseProps, toppingsProps } = pizzaFormPropsHelper(dispatch, pizzaIngredientValues);
  return (
    <Stack>
      <Text fontSize={"lg"} mb={3} fontFamily={"bricolage"} children="1. Choose your pizza size, sauce and cheese:" />
      {pizzaSizeProps && <PizzaSizeRadioGroup {...pizzaSizeProps} />}
      {sauceAndCheeseProps?.map((props) => (
        <PizzaIngredientRadioGroup {...props} />
      ))}
      <Text fontSize={"lg"} my={3} fontFamily={"bricolage"} children="2. Choose your toppings:" />
      {toppingsProps?.map((props) => (
        <PizzaIngredientRadioGroup {...props} />
      ))}
      <Flex mt={5} justifyContent={"space-between"}>
        <Button variant={"outline"} onClick={() => dispatch.dashboardModel.clearState()} children="Back" />
        <Button
          colorScheme="green"
          onClick={() => dispatch.dashboardModel.setIsConfirmingOrder(true)}
          children="Confirm Order"
        />
      </Flex>
    </Stack>
  );
};

export default DashboardNewOrderForm;
