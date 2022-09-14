import { GetterTree } from 'vuex'
import { State } from './state'
import {Getters} from "@/modules/products/interfaces/vuex/Getters";

export const getters: GetterTree<State, State> & Getters = {
    getItem: (state) =>  state.items,
    getTaskList: (state) =>  state.tasks
}