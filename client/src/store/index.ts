import { Models } from "@rematch/core";
import { loginModel } from "@/models/login";
import { registerModel } from "@/models/register";
import { dashboardModel } from "@/models/dashboard";
import { tokenModel } from "@/models/token";

export interface RootModel extends Models<RootModel> {
  loginModel: typeof loginModel;
  registerModel: typeof registerModel;
  dashboardModel: typeof dashboardModel;
  tokenModel: typeof tokenModel;
}
export const models: RootModel = {
  loginModel,
  registerModel,
  dashboardModel,
  tokenModel,
};
