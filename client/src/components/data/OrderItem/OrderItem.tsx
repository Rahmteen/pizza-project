import { DateTime } from "luxon";
import { Badge, Flex, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Order } from "@/store/types";
import { parsePizzaIngredientValue } from "@/utils/parsePizzaIngredientValue";
import { parsePizzaSize } from "@/utils/parsePizzaSize";
import { parsePortionBadgeColor } from "@/utils/parsePortionBadgeColor";

interface OrderItemProps {
  order: Order;
}

/**
 * @name OrderItem
 * @type {React.FC<{ OrderItemProps }>}
 * @param {Order} order pizza order value
 *
 * @description returns a grid with formatted pizza order values and timestamp.
 * @returns {React.ReactNode}
 */

const OrderItem: React.FC<OrderItemProps> = ({ order }: OrderItemProps): React.ReactNode => {
  const convertedDate = DateTime.fromISO(order.createdAt);
  const formattedDate = convertedDate.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  const pizzaSize = order?.cart.size;
  return (
    <SimpleGrid px={5} py={5} columns={7} bg="blackAlpha.50">
      <GridItem as={Flex} alignItems={"start"} colSpan={2}>
        <Text textTransform={'uppercase'} fontWeight={700} fontFamily={"bricolage"}>{parsePizzaSize(pizzaSize)}</Text>
      </GridItem>
      <GridItem colSpan={3}>
        <Stack>
          {Object.entries(order?.cart).map(([item, value], index) => {
            if (item !== "size")
              return (
                <Flex key={item + value + index} direction={{ base: "column", lg: "row" }} alignItems={{ base: "start", lg: "center" }} gap={2}>
                  <Badge textAlign={'center'} minW="10ch" colorScheme={parsePortionBadgeColor(parsePizzaIngredientValue(value) || "")}>
                    {parsePizzaIngredientValue(value)}
                  </Badge>
                  <Text fontWeight={600} minW={{ lg: "10ch" }} fontFamily={"bricolage"}>
                    {item}
                  </Text>
                </Flex>
              );
          })}
        </Stack>
      </GridItem>
      <GridItem as={Flex} alignItems={"start"} colSpan={2}>
        <Text fontFamily={"bricolage"}>{formattedDate}</Text>
      </GridItem>
    </SimpleGrid>
  );
};

export default OrderItem;
