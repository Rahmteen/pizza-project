import { useSelector } from "react-redux";
import { DashboardState } from "@/store/types";
import { store } from "@/store/store";

import DashboardHeader from "@/components/headers/DashboardHeader/DashboardHeader";
import DashboardPageLayout from "@/components/wrappers/DashboardPageLayout/DashboardPageLayout";
import DashboardLandingButtons from "@/pages/Dashboard/components/DashboardLandingButtons/DashboardLandingButtons";
import DashboardPastOrders from "@/pages/Dashboard/components/DashboardPastOrders/DashboardPastOrders";
import DashboardChatbot from "@/pages/Dashboard/components/DashboardChatbot/DashboardChatbot";
import DashboardSuccess from "@/pages/Dashboard/components/DashboardSuccess/DashboardSuccess";
import DashboardNewOrderForm from "@/pages/Dashboard/components/DashboardNewOrderForm/DashboardNewOrderForm";
import DashboardConfirmOrder from "@/pages/Dashboard/components/DashboardConfirmOrder/DashboardConfirmOrder";

/**
 * @name Dashboard
 * @type {React.FC}
 * @description '/dashboard' - page for non-admin user services
 * @returns {React.ReactNode}
 */

const Dashboard: React.FC = (): React.ReactNode => {
  const currentDashboardState = useSelector(store.select.dashboardModel.selectCurrentState);
  const isConfirmingOrder = useSelector(store.select.dashboardModel.selectIsConfirmingOrder);

  return (
    <DashboardPageLayout>
      <DashboardHeader title={"Pizza Project"} subtitle={"Welcome to the"} icon={"fa-solid fa-pizza"} />
      {currentDashboardState === DashboardState.DEFAULT && <DashboardLandingButtons />}
      {currentDashboardState === DashboardState.PAST_ORDERS && <DashboardPastOrders />}
      {currentDashboardState === DashboardState.CHAT_ORDER && <DashboardChatbot />}
      {currentDashboardState === DashboardState.SUCCESS && <DashboardSuccess />}
      {currentDashboardState === DashboardState.NEW_ORDER && !isConfirmingOrder && <DashboardNewOrderForm />}
      {currentDashboardState === DashboardState.NEW_ORDER && isConfirmingOrder && <DashboardConfirmOrder />}
    </DashboardPageLayout>
  );
};

export default Dashboard;
