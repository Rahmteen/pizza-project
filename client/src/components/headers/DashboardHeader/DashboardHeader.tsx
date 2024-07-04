import { Divider, Flex, Stack, Text } from "@chakra-ui/react";
import LogoutButton from "@/components/buttons/LogoutButton/LogoutButton";

interface DashboardHeaderProps {
  subtitle: string;
  title: string;
  icon: string;
}

/**
 * @name DashboardHeader
 * @type {React.FC<{ DashboardHeaderProps }>}
 * @param {string} subtitle smaller text over title
 * @param {string} title larger main text value
 * @param {string} icon fontawesome className for icon
 *
 * @description header component user for the dashboard and admin pages.
 * @returns {React.ReactNode}
 */

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  subtitle,
  title,
  icon,
}: DashboardHeaderProps): React.ReactNode => {
  return (
    <>
      <Flex
        direction={{ base: "column", lg: "row" }}
        alignItems={{ base: "start", lg: "center" }}
        justifyContent={"space-between"}
        minW="100%"
      >
        <Flex>
          <Text mr={5} as="i" fontSize={"75px"} className={icon} />
          <Stack mb={4} gap={0}>
            <Text color="black" fontSize={"sm"} fontWeight={400} fontFamily={"inter"}>
              {subtitle}
            </Text>
            <Text mt={{ base: -1, lg: -1 }} fontFamily={"bricolage"} fontWeight={600} color="black" fontSize={"4xl"}>
              {title}
            </Text>
          </Stack>
        </Flex>
        <Flex mb={{ base: 3, lg: -7 }} alignItems={"basline"}>
          <LogoutButton />
        </Flex>
      </Flex>
      <Divider mb={6} rounded={"2xl"} border="solid 2px" borderColor="black" />
    </>
  );
};

export default DashboardHeader;
