import { TOGGLE_CETA, TOGGLE_FULL } from "../actionType.js/filterType";

const initialState={
    filter :{
        cetagory : [],
        full : false,
        arr: []
    }
}

const filterReducer = (state = initialState, action)=>{
    switch(action.type) {
       
        case TOGGLE_CETA :
            if(!state.filter.cetagory.includes(action.payload)){
                return{
                    ...state,
                    filter: {
                        ...state.filter,
                        cetagory: [...state.filter.cetagory, action.payload]
                    }
                }
            }else{
                return{
                    ...state,
                    filter: {
                        ...state.filter,
                        cetagory: state.filter.cetagory.filter(item=> item !== action.payload)
                    }
                }
            }
            case TOGGLE_FULL:
                return{
                    ...state,
                    filter: {
                        ...state.filter,
                        full: !state.filter.full
                    }
                }
        default : 
          return state
    }
}

export default filterReducer;