import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { Dispatch, store } from "@/store/store";
import { parsePizzaSize } from "@/utils/parsePizzaSize";
import { parsePizzaIngredientValue } from "@/utils/parsePizzaIngredientValue";

/**
 * @name DashboardConfirmOrder
 * @type {React.FC}
 * @description This page shows the users' order details before they confirm and place it.
 * This screen is visible when the dashboard state is set to CONFIRM_ORDER.
 * @returns {React.ReactNode}
 */

const DashboardConfirmOrder: React.FC = (): React.ReactNode => {
  const dispatch = useDispatch<Dispatch>();
  const newOrder = useSelector(store.select.dashboardModel.selectNewOrder);
  return (
    <Stack>
      <Text mb={4} fontSize="xl" fontFamily={"bricolage"}>
        Confirm and place your order:
      </Text>
      <Flex px={3} py={2} bg="blackAlpha.50" gap={4} justifyContent={"space-between"}>
        <Text fontFamily={"bricolage"}>size:</Text>
        <Text fontFamily={"bricolage"}>{parsePizzaSize(newOrder.size)}</Text>
      </Flex>
      {Object.entries(newOrder).map(([name, value]) => {
        if (name !== "size" && value !== 0)
          return (
            <Flex px={3} py={2} bg="blackAlpha.50" gap={4} justifyContent={"space-between"}>
              <Text fontFamily={"bricolage"}>{name}:</Text>
              <Text fontFamily={"bricolage"}>{parsePizzaIngredientValue(value)}</Text>
            </Flex>
          );
      })}
      <Flex mt={5} justifyContent={"space-between"}>
        <Button
          variant={"outline"}
          onClick={() => dispatch.dashboardModel.setIsConfirmingOrder(false)}
          children="Back"
        />
        <Button colorScheme="green" children="Place order" onClick={() => /* todo */ {}} />
      </Flex>
    </Stack>
  );
};
export default DashboardConfirmOrder;
