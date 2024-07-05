import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Text } from "@chakra-ui/react";
import { Dispatch, store } from "@/store/store";
import { AdminState } from "@/store/types";

import BackButton from "@/components/buttons/BackButton/BackButton";
import OrderItem from "@/components/data/OrderItem/OrderItem";
import OrderHeader from "@/components/headers/OrderHeader/OrderHeader";

/**
 * @name AdminOrders
 * @type {React.FC}
 * @description fetches all orders if they are not present in the state
 * and renders them in a list for the admin.
 * @returns {React.ReactNode}
 */

const AdminOrders: React.FC = (): React.ReactNode => {
  const dispatch = useDispatch<Dispatch>();
  const token = useSelector(store.select.tokenModel.selectToken);
  const allOrder = useSelector(store?.select.adminModel.selectAllOrders);

  useEffect(() => {
    if (!allOrder?.length) dispatch.adminModel.fetchAllOrders(token);
  }, []);

  return (
    <Stack gap={2}>
      <Stack mt={-2} mb={5} gap={4}>
        <BackButton onClick={() => dispatch.adminModel.setCurrentState(AdminState.DEFAULT)} />
        <Text fontWeight={600} fontFamily={"bricolage"} fontSize={"5xl"}>
          All Orders
        </Text>
      </Stack>
      <OrderHeader />
      {allOrder?.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </Stack>
  );
};

export default AdminOrders;
