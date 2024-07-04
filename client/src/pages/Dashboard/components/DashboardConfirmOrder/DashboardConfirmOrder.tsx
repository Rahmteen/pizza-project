import { Badge, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { Dispatch, store } from "@/store/store";
import { parsePizzaSize } from "@/utils/parsePizzaSize";
import { parsePizzaIngredientValue } from "@/utils/parsePizzaIngredientValue";
import { parsePortionBadgeColor } from "@/utils/parsePortionBadgeColor";

/**
 * @name DashboardConfirmOrder
 * @type {React.FC}
 * @description This page shows the users' order details before they confirm and place it.
 * This screen is visible when the dashboard state is set to CONFIRM_ORDER.
 * @returns {React.ReactNode}
 */

const DashboardConfirmOrder: React.FC = (): React.ReactNode => {
  const dispatch = useDispatch<Dispatch>();
  const token = useSelector(store.select.tokenModel.selectToken);
  const newOrder = useSelector(store.select.dashboardModel.selectNewOrder);
  const isLoading = useSelector(store.select.dashboardModel.selectIsLoading);
  return (
    <Stack>
      <Text mb={4} fontSize="xl" fontFamily={"bricolage"}>
        Confirm and place your order:
      </Text>
      <Flex alignItems={'center'} px={3} py={2} bg="blackAlpha.50" gap={4} justifyContent={"space-between"}>
        <Text fontFamily={"bricolage"} fontWeight={600}>size</Text>
        <Badge textAlign={"center"} minW="10ch">
          {parsePizzaSize(newOrder.size)}
        </Badge>
      </Flex>
      {Object.entries(newOrder).map(([name, value]) => {
        if (name !== "size" && value !== 0)
          return (
            <Flex px={3} py={2} bg="blackAlpha.50" gap={4} justifyContent={"space-between"} alignItems={"center"}>
              <Text fontFamily={"bricolage"} fontWeight={600}>{name}</Text>
              <Badge
                textAlign={"center"}
                minW="10ch"
                colorScheme={parsePortionBadgeColor(parsePizzaIngredientValue(value) || "")}
              >
                {parsePizzaIngredientValue(value)}
              </Badge>
            </Flex>
          );
      })}
      <Flex mt={5} justifyContent={"space-between"}>
        <Button
          colorScheme="blackAlpha"
          onClick={() => dispatch.dashboardModel.setIsConfirmingOrder(false)}
          children="Back"
        />
        <Button
          isLoading={isLoading}
          colorScheme="green"
          children="Place Order"
          onClick={() => dispatch.dashboardModel.placeUserOrder([token, newOrder])}
        />
      </Flex>
    </Stack>
  );
};
export default DashboardConfirmOrder;
