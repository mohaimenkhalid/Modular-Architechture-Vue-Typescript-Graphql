import { MutationTree } from 'vuex'
import * as MutationTypes from "./mutation-types";
import { State } from './state'


export type Mutations<S = State> = {
  [MutationTypes.SET_TASK_LIST](state: S, payload: []): void
  [MutationTypes.ADD_ITEM](state: S, payload: []): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_TASK_LIST](state, payload) {
    state.tasks = payload
  },
  [MutationTypes.ADD_ITEM](state, payload) {
    state.items = payload
  },
}


// export default {
//   [types.ADD_ITEM](state:any, item: any) {
//     console.log(item)
//   },
//   [types.SET_TASK_LIST](state:any, tasks: any) {
//     state.tasks = tasks
//   },
//
//   // [types.REMOVE_ITEM](state, id) {
//   //   state.items = state.items.filter(item => item.id !== id);
//   // }
// };
