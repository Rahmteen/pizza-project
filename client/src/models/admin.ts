import type { RootModel } from "@/store";
import { createModel } from "@rematch/core";
import { getAllLogs, getAllOrders, inviteUserByEmail } from "@/api/admin";
import { AdminModelState, AdminState, Log, Order } from "@/store/types";
import { defaultAdminModelState } from "@/store/constants";

export const adminModel = createModel<RootModel>()({
  state: { ...defaultAdminModelState } as AdminModelState,
  reducers: {
    setCurrentState: (state: AdminModelState, currentState: AdminState) => ({ ...state, currentState }),
    setEmail: (state: AdminModelState, email: string) => ({ ...state, email }),
    setAllOrders: (state: AdminModelState, allOrders: Order[]) => ({ ...state, allOrders }),
    setAllLogs: (state: AdminModelState, allLogs: Log[]) => ({ ...state, allLogs }),
    setIsAdmin: (state: AdminModelState, isAdmin: boolean) => ({ ...state, isAdmin }),
    clearState: () => ({ ...defaultAdminModelState }),
  },
  selectors: (slice) => ({
    selectEmail: () => slice((state: AdminModelState): string => state?.email),
    selectCurrentState: () => slice((state: AdminModelState): AdminState => state?.currentState),
    selectAllOrders: () => slice((state: AdminModelState): Order[] => state?.allOrders),
    selectAllLogs: () => slice((state: AdminModelState): Log[] => state?.allLogs),
  }),
  effects: () => ({
    async fetchAllLogs(token: string) {
      try {
        const res = await getAllLogs(token);
        if (res.data) this.setAllLogs(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchAllOrders(token: string) {
      try {
        const res = await getAllOrders(token);
        if (res.data) this.setAllOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    async sendInviteEmail([email, token]: [string, string]) {
      try {
        const res = await inviteUserByEmail(email, token);
        if (res.data) this.setCurrentState(AdminState.INVITE_SUCCESS);
      } catch (error) {
        console.log(error);
      }
    },
  }),
});
