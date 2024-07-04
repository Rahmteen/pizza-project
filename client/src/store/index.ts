import { Models } from "@rematch/core";
import { loginModel } from "@/models/login";
import { registerModel } from "@/models/register";
import { dashboardModel } from "@/models/dashboard";

export interface RootModel extends Models<RootModel> {
  loginModel: typeof loginModel;
  registerModel: typeof registerModel;
  dashboardModel: typeof dashboardModel;
}
export const models: RootModel = {
  loginModel,
  registerModel,
  dashboardModel,
};
