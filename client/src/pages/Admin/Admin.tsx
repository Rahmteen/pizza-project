import { useSelector } from "react-redux";
import { AdminState } from "@/store/types";
import { store } from "@/store/store";

import DashboardHeader from "@/components/headers/DashboardHeader/DashboardHeader";
import DashboardPageLayout from "@/components/wrappers/DashboardPageLayout/DashboardPageLayout";
import AdminLandingButtons from "@/pages/Admin/components/AdminLandingButtons/AdminLandingButtons";
import AdminUserInvite from "@/pages/Admin/components/AdminUserInvite/AdminUserInvite";
import AdminSuccess from "@/pages/Admin/components/AdminSuccess/AdminSuccess";
import AdminLogs from "@/pages/Admin/components/AdminLogs/AdminLogs";
import AdminOrders from "@/pages/Admin/components/AdminOrders/AdminOrders";

const Admin = () => {
  const currentAdminState = useSelector(store.select.adminModel.selectCurrentState);
  return (
    <DashboardPageLayout>
      <DashboardHeader subtitle="Welcome to your" title="Admin Dashboard" icon="fa-duotone fa-shield-halved" />
      {currentAdminState === AdminState.DEFAULT && <AdminLandingButtons />}
      {currentAdminState === AdminState.INVITE && <AdminUserInvite />}
      {currentAdminState === AdminState.INVITE_SUCCESS && <AdminSuccess />}
      {currentAdminState === AdminState.LOGS && <AdminLogs />}
      {currentAdminState === AdminState.ORDERS && <AdminOrders />}
    </DashboardPageLayout>
  );
};

export default Admin;
