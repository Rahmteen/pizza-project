import { useDispatch } from "react-redux";
import { SimpleGrid } from "@chakra-ui/react";
import { Dispatch } from "@/store/store";

import LargeGridButton from "@/components/buttons/LargeGridButton/LargeGridButton";
import { createAdminGridButtons } from "@/utils/createAdminGridButton";

/**
 * @name AdminLandingButtons
 * @type {React.FC}
 * @description handles mapping and rendering admin buttons. This screen is visible
 * when the admin state is set to DEFAULT
 * @returns {React.ReactNode}
 */

const AdminLandingButtons: React.FC = (): React.ReactNode => {
  const dispatch = useDispatch<Dispatch>();
  return (
    <SimpleGrid gap={4} columns={{ base: 1, lg: 3 }}>
      {createAdminGridButtons((state) => dispatch.adminModel.setCurrentState(state))?.map((gridButton) => (
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

export default AdminLandingButtons;
