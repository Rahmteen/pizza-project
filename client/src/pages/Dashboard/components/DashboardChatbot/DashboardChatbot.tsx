import { useDispatch } from "react-redux";
import { Dispatch } from "@/store/store";
import { DashboardState } from "@/store/types";
import BackButton from "@/components/buttons/BackButton/BackButton";

const DashboardChatbot = () => {
  const dispatch = useDispatch<Dispatch>();
  return (
    <>
      <BackButton onClick={() => dispatch.dashboardModel.setCurrentState(DashboardState.DEFAULT)} />
    </>
  );
};

export default DashboardChatbot;
