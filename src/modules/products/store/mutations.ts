import * as types from "./mutation-types";

export default {
  [types.ADD_ITEM](state:any, item: any) {
    console.log(item)
  },
  [types.SET_TASK_LIST](state:any, tasks: any) {
    state.tasks = tasks
  },

  // [types.REMOVE_ITEM](state, id) {
  //   state.items = state.items.filter(item => item.id !== id);
  // }
};
