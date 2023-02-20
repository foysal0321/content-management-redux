import { ADD_DATA, LOAD_DATA } from "../actionType.js/actionType";

const initialState = {
    products: []
}
const productsReducer = (state = initialState, action)=>{
    switch(action.type) {
       case LOAD_DATA :
        return{
            ...state,
            products : action.payload 
        }
        
       case ADD_DATA :
        return{
            ...state,
            products : [...state.products, action.payload]
        }

        default : 
          return state
    }
}

export default productsReducer;