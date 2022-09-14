import {Mutations} from "@/modules/products/store/mutations";
import {ActionContext} from "vuex";
import {State} from "@/modules/products/store/state";

export interface StateType {
    items: Array<any>
    tasks: Array<any>
}

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>


export interface Actions {
    login(
        {commit}: AugmentedActionContext,
        payload: object
    ): void
    getTaskList(
        {commit}: AugmentedActionContext
    ): void
    createTask(
        {commit}: AugmentedActionContext,
        payload: object
    ): void
    register(
        {commit}: AugmentedActionContext,
        payload: object
    ): void

    // Promise<number>
}