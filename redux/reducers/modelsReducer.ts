import {ModelAction, ModelsActionTypes, ModelsState} from "../../types/models";

let initialState: ModelsState = {
    models: [
        {
            customer_id: 'user1',
            server_name: 'server7',
            server_type: 'vds'
        },
        {
            customer_id: 'user5',
            server_name: 'server2',
            server_type: 'dedicated'
        },
        {
            customer_id: 'user3',
            server_name: 'server4',
            server_type: 'hosting'
        }
    ]
};

const modelsReducer = (state = initialState, action: ModelAction):ModelsState => {
    switch (action.type) {
        case ModelsActionTypes.EDIT:
            const index = state.models.findIndex(model => model.customer_id === action.payload.customer_id);
            const newModels = state.models;
            newModels[index].server_name = action.payload.server_name;
            newModels[index].server_type = action.payload.server_type;
            return {
                ...state,
                models: [...newModels]
            }
        default:
            return {
                ...state
            }
    }
}
export default modelsReducer;
