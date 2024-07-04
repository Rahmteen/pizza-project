import { useDispatch, useSelector } from "react-redux";
import { Button, Flex, Input, Stack, Text } from "@chakra-ui/react";

import { Dispatch, store } from "@/store/store";
import { AdminState } from "@/store/types";
import BackButton from "@/components/buttons/BackButton/BackButton";

/**
 * @name AdminUserInvite
 * @type {React.FC}
 * @description This page allows admins to access the form to invite new members.
 * @returns {React.ReactNode}
 */

const AdminUserInvite: React.FC = (): React.ReactNode => {
  const dispatch = useDispatch<Dispatch>();
  const token = useSelector(store.select.tokenModel.selectToken);
  const email = useSelector(store.select.adminModel.selectEmail);
  const isLoading = useSelector(store.select.adminModel.selectIsLoading);
  return (
    <Stack>
      <BackButton onClick={() => dispatch.adminModel.setCurrentState(AdminState.DEFAULT)} />
      <Text mt={4} fontWeight={600} fontFamily={"bricolage"} fontSize={"4xl"} children="Invite a User" />
      <Text
        mt={-2}
        fontWeight={400}
        fontFamily={"bricolage"}
        fontSize={"md"}
        children={`Enter their email and they'll receive a link to register.`}
      />
      <Flex mt={5} gap={2}>
        <Input onChange={(e) => dispatch.adminModel.setEmail(e.target.value)} placeholder="Enter email" />
        <Button
          isLoading={isLoading}
          onClick={() => dispatch.adminModel.sendInviteEmail([email, token])}
          px={6}
          colorScheme="green"
          children="Send Invite"
        />
      </Flex>
    </Stack>
  );
};

export default AdminUserInvite;
