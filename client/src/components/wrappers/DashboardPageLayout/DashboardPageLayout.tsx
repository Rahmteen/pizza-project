import { Container, Stack } from "@chakra-ui/react";

interface DashboardPageLayoutProps {
  children: React.ReactNode;
}

/**
 * @name DashboardPageLayout
 * @type {React.FC<{ DashboardPageLayoutProps }>}
 * @param {React.ReactNode} children
 *
 * @description A container + flex wrapper for dashboard-centeric pages to manage
 * mobile/desktop styling and general formatting.
 * @returns {React.ReactNode}
 */

const DashboardPageLayout: React.FC<DashboardPageLayoutProps> = ({
  children,
}: DashboardPageLayoutProps): React.ReactNode => {
  return (
    <Container px={{ base: 8, lg: 0 }} minW="100vw" minH="100vh" bg="white">
      <Stack py={{ base: 10, lg: 24 }} mx="auto" maxW={{ base: "auto", lg: "5xl" }}>
        {children}
      </Stack>
    </Container>
  );
};

export default DashboardPageLayout;
