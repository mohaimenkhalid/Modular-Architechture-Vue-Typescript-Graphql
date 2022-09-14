// export default () => ({
//   items: [],
//   tasks: [],
// });
import {StateType} from "@/modules/products/interfaces/vuex/States";
export const state = <StateType>{
  items: [],
  tasks: [],
}
export type State = typeof state
