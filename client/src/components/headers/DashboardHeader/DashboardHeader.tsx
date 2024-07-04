import { Divider, Flex, Stack, Text } from "@chakra-ui/react";

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
          <Text mr={6} as="i" fontSize={"75px"} className={icon} />
          <Stack mb={4} gap={0}>
            <Text fontSize={"md"} fontWeight={300} fontFamily={"bricolage"}>
              {subtitle}
            </Text>
            <Text fontFamily={"bricolage"} fontWeight={500} fontSize={"4xl"}>
              {title}
            </Text>
          </Stack>
        </Flex>
      </Flex>
      <Divider mb={6} borderColor="black" />
    </>
  );
};

export default DashboardHeader;
