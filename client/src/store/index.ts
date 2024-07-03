import { Models } from "@rematch/core";
import { loginModel } from "@/models/login";
import { registerModel } from "@/models/register";

export interface RootModel extends Models<RootModel> {
  loginModel: typeof loginModel;
  registerModel: typeof registerModel;
}
export const models: RootModel = {
  loginModel,
  registerModel,
};
