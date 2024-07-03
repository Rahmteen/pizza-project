import { Flex, GridItem, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import BackgroundImage from "@/public/stock.jpg";

interface FormPageLayoutProps {
  children: React.ReactNode;
}

/**
 * @name FormPageLayout
 * @type {React.FC<{ FormPageLayoutProps }>}
 * @param {React.ReactNode} children
 *
 * @description A grid wrapper for the login & register pages to manage
 * mobile/desktop styling, image import and general formatting.
 * @returns {React.ReactNode}
 */

const FormPageLayout = ({ children }: FormPageLayoutProps): React.ReactNode => {
  return (
    <SimpleGrid minH="100vh" columns={{ base: 1, lg: 2 }}>
      <GridItem px={{ base: 10, lg: 32 }} as={Flex} alignItems={"center"} colSpan={1}>
        <Stack minW="100%" rounded="lg" gap={5}>
          {children}
        </Stack>
      </GridItem>
      <GridItem display={{ base: "none", lg: "flex" }} colSpan={1}>
        <Image maxH="100vh" w="100%" objectFit={"cover"} src={BackgroundImage} />
      </GridItem>
    </SimpleGrid>
  );
};

export default FormPageLayout;
