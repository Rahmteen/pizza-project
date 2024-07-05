import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { DateTime } from "luxon";

import { Dispatch, store } from "@/store/store";
import { AdminState } from "@/store/types";
import BackButton from "@/components/buttons/BackButton/BackButton";

/**
 * @name AdminLogs
 * @type {React.FC}
 * @description fetches all logs if they are not present in the state
 * and renders them in a list for the admin.
 * @returns {React.ReactNode}
 */

const AdminLogs = () => {
  const dispatch = useDispatch<Dispatch>();
  const token = useSelector(store.select.tokenModel.selectToken);
  const allLogs = useSelector(store.select.adminModel.selectAllLogs);

  useEffect(() => {
    if (!allLogs?.length) dispatch.adminModel.fetchAllLogs(token);
  }, []);

  const badgeMapping = {
    USER: <Badge colorScheme="green">USER</Badge>,
    ERROR: <Badge colorScheme="red">ERROR</Badge>,
    ADMIN: <Badge colorScheme="purple">ADMIN</Badge>,
  };

  return (
    <Stack>
      <Stack mt={-2} mb={5} gap={4}>
        <BackButton onClick={() => dispatch.adminModel.setCurrentState(AdminState.DEFAULT)} />
        <Text fontWeight={600} fontFamily={"bricolage"} fontSize={"5xl"}>
          All Logs
        </Text>
      </Stack>
      <SimpleGrid columns={6}>
        <GridItem colSpan={1}>
          <Text fontFamily={"bricolage"}>Type</Text>
        </GridItem>
        <GridItem colSpan={3}>
          <Text fontFamily={"bricolage"}>Description</Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text fontFamily={"bricolage"}>Time Created</Text>
        </GridItem>
      </SimpleGrid>
      {allLogs?.map((log) => (
        <SimpleGrid key={log.id} columns={6}>
          <GridItem colSpan={1}>{badgeMapping[log?.type]}</GridItem>
          <GridItem colSpan={3}>
            <Text fontFamily={"bricolage"}>{log.description}</Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Text fontFamily={"bricolage"}>
              {DateTime.fromISO(log.createdAt).toLocaleString(DateTime.DATETIME_SHORT)}
            </Text>
          </GridItem>
        </SimpleGrid>
      ))}
    </Stack>
  );
};

export default AdminLogs;
