import { ActionTypes } from "../contants/Action-types";

const initialState ={
    products:[{
       id: 1,
       title: "asif",
       category: "programmer",
    }],
}

export const productsReducer = (state = initialState, {type, payload}) => {
   switch (type) {
    case ActionTypes.SET_PRODUCTS:
        return state;
    default:
        return state;
   }
}    