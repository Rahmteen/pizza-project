import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, SlideFade, Stack, Text } from "@chakra-ui/react";

import { DashboardState } from "@/store/types";
import { Dispatch, store } from "@/store/store";

/**
 * @name DashboardSuccess
 * @type {React.FC}
 * @description This page shows a visual cue with a checkmark to inform the user
 * of a successful order. This screen is visible when the dashboard state is set to SUCCESS.
 * @returns {React.ReactNode}
 */

const DashboardSuccess = () => {
  const dispatch = useDispatch<Dispatch>();
  const dashboardState = useSelector(store.select.dashboardModel.selectCurrentState);
  let exitTimer = setTimeout(() => dispatch.dashboardModel.clearState(), 3000);

  useEffect(() => {
    if (dashboardState === DashboardState.SUCCESS) {
      () => exitTimer;
    }
    return () => {
      clearTimeout(exitTimer);
    };
  }, [dashboardState]);

  return (
    <Stack minH="30vh" justifyContent={"center"} alignItems={"center"}>
      <SlideFade transition={{ enter: { duration: 0.3, delay: 0.3 } }} in={true}>
        <Stack>
          <Flex justifyContent={"center"} gap={4} alignItems={"center"}>
            <Text fontSize="3xl" color="green" as="i" className="fa-solid fa-square-check" />
            <Text fontWeight={600} fontFamily={"bricolage"} fontSize={"4xl"} children="Success!" />
          </Flex>
          <Text
            mt={-2}
            fontWeight={400}
            fontFamily={"bricolage"}
            fontSize={"lg"}
            children="Your order has been placed."
          />
        </Stack>
      </SlideFade>
      <SlideFade transition={{ enter: { duration: 1.3, delay: 1.3 } }} in={true}>
        <Stack mt={3}>
          <Text fontWeight={400} fontFamily={"bricolage"} fontSize={"sm"} children={<i>redirecting back home</i>} />
        </Stack>
      </SlideFade>
    </Stack>
  );
};

export default DashboardSuccess;
