import { TOGGLE_CETA, TOGGLE_FULL } from "../actionType.js/filterType"

export const toggleCeta =(name)=>{
    return{
        type: TOGGLE_CETA,
        payload: name
    }
}
export const toggleFull =(name)=>{
    return{
        type: TOGGLE_FULL
    }
}