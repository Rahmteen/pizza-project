import { SimpleGrid, GridItem, Text } from "@chakra-ui/react";
/**
 * @name OrderHeader
 * @type {React.FC}
 *
 * @description returns a formatted grid with text values for displaying
 * pizza orders
 * @returns {React.ReactNode}
 */

const OrderHeader: React.FC = (): React.ReactNode => {
  return (
    <SimpleGrid bg="blackAlpha.200" py={2} px={5} columns={7}>
      <GridItem colSpan={2}>
        <Text fontWeight={600} fontFamily={"bricolage"}>
          Size
        </Text>
      </GridItem>
      <GridItem colSpan={3}>
        <Text fontWeight={600} fontFamily={"bricolage"}>
          Toppings
        </Text>
      </GridItem>
      <GridItem colSpan={2}>
        <Text fontWeight={600} fontFamily={"bricolage"}>
          Order Time
        </Text>
      </GridItem>
    </SimpleGrid>
  );
};

export default OrderHeader;
