import { useDispatch } from "react-redux";
import { Dispatch } from "@/store/store";
import { SimpleGrid } from "@chakra-ui/react";

import { createDashboardGridButtons } from "@/utils/createDashboardGridButtons";
import LargeGridButton from "@/components/buttons/LargeGridButton/LargeGridButton";

/**
 * @name DashboardLandingButtons
 * @type {React.FC}
 * @description handles mapping and rendering dashboard buttons. This screen is visible
 * when the dashboard state is set to DEFAULT
 * @returns {React.ReactNode}
 */

const DashboardLandingButtons: React.FC = (): React.ReactNode => {
  const dispatch = useDispatch<Dispatch>();
  return (
    <SimpleGrid gap={4} columns={{ base: 1, lg: 3 }}>
      {createDashboardGridButtons((state) => dispatch.dashboardModel.setCurrentState(state))?.map((gridButton) => (
        <LargeGridButton
          key={gridButton.title}
          onClick={gridButton.onClick}
          color={gridButton.color}
          icon={gridButton.icon}
          title={gridButton.title}
        />
      ))}
    </SimpleGrid>
  );
};

export default DashboardLandingButtons;
