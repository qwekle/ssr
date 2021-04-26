export interface ModelsState {
    models: { customer_id: string, server_name: string, server_type: string }[]
}

export interface Model {
    customer_id: string,
    server_name: string,
    server_type: string

}

export enum ModelsActionTypes {
    EDIT = 'EDIT',
}

interface ChangeAction {
    type: ModelsActionTypes.EDIT,
    payload?: Model
}

export type ModelAction = ChangeAction;