import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from '../actions/types';

const initialState = {
    nextId: 5,
    items: [],
    loading: false
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_ITEMS : 
            return{
                ...state,
                items : action.payload,
                loading: false
            }
        case DELETE_ITEM:
            return{
                ...state,
                items : state.items.filter(item => item._id !== action.payload)
            }
        case ADD_ITEM:
            state.nextId += 1;
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default: return state ;
    }
}