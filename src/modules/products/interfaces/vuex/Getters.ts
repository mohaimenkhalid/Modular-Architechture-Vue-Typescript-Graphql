import {State} from "@/modules/products/store/state";

export type Getters = {
    getItem(state: State): Array<any>
    getTaskList(state: State): Array<any>
}