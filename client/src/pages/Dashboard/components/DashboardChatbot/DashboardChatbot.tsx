import BackButton from "@/components/buttons/BackButton/BackButton";
import { DashboardState } from "@/store/types";
import { Dispatch, store } from "@/store/store";
import { Button, Stack, Text, Textarea } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

/**
 * @name DashboardChatBot
 * @type {React.FC}
 * @description Work in progress - implementing chat gpt 
 * bot to complete user orders.
 * 
 * @returns {React.ReactNode}
 */

const DashboardChatbot = () => {
  const dispatch = useDispatch<Dispatch>();
  const chatlog = useSelector(store.select.dashboardModel.selectChatlog);
  const token = useSelector(store.select.tokenModel.selectToken);
  const currentMessage = useSelector(store.select.dashboardModel.selectCurrentMessage);
  return (
    <Stack>
      <Stack mt={-2} mb={5} gap={4}>
        <BackButton onClick={() => dispatch.dashboardModel.setCurrentState(DashboardState.DEFAULT)} />
        <Text fontWeight={600} fontFamily={"bricolage"} fontSize={"4xl"}>
          Order with Chat
        </Text>
      </Stack>
      <Stack py={4} px={4} gap={2} minH="40vh" bg="blackAlpha.50">
        {chatlog?.map((message, index) => {
          return (
            <Text fontSize={"lg"} fontFamily={"bricolage"}>
              {message}
            </Text>
          );
        })}
      </Stack>
      <Textarea
        value={currentMessage}
        onChange={(e) => dispatch.dashboardModel.setCurrentMessage(e.target.value)}
        placeholder="I want a pepperoni pizza..."
      />
      <Button
        onClick={() => {
          dispatch.dashboardModel.sendChatMessage([token, currentMessage]);
        }}
        colorScheme="green"
      >
        Send Message
      </Button>
    </Stack>
  );
};

export default DashboardChatbot;
