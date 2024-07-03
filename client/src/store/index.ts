import { Models } from "@rematch/core";
import { loginModel } from "@/models/login";

export interface RootModel extends Models<RootModel> {
  loginModel: typeof loginModel;
}
export const models: RootModel = {
  loginModel,
};
