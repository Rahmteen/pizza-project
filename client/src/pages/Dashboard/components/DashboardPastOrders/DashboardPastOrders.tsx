import { Dispatch, store } from "@/store/store";
import { Button, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { DashboardState } from "@/store/types";

import OrderHeader from "@/components/headers/OrderHeader/OrderHeader";
import OrderItem from "@/components/data/OrderItem/OrderItem";
import { useEffect } from "react";

/**
 * @name DashboardPastOrdersForm
 * @type {React.FC}
 * @description fetches past orders if they are not present and renders
 * them in a list for the user.
 * @returns {React.ReactNode}
 */

const DashboardPastOrders: React.FC = (): React.ReactNode => {
  const dispatch = useDispatch<Dispatch>();
  const token = useSelector(store.select.tokenModel.selectToken);
  const pastOrders = useSelector(store.select.dashboardModel.selectPastOrders);
  useEffect(() => {
    if (!pastOrders?.length) dispatch.dashboardModel.getPastUserOrders(token);
  }, []);
  return (
    <Stack gap={2}>
      <Stack mt={-2} mb={5} gap={4}>
        <Button
          onClick={() => dispatch.dashboardModel.setCurrentState(DashboardState.DEFAULT)}
          leftIcon={<Text as="i" fontSize="xs" className="fa-solid fa-arrow-left" />}
          size="sm"
          variant={"outline"}
          maxW="fit-content"
        >
          <Text fontFamily={"bricolage"}>back home</Text>
        </Button>
        <Text fontWeight={600} fontFamily={"bricolage"} fontSize={"5xl"}>
          Past Orders
        </Text>
      </Stack>
      <OrderHeader />
      {pastOrders?.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </Stack>
  );
};

export default DashboardPastOrders;
