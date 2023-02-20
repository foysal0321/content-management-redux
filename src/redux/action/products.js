import { ADD_DATA, LOAD_DATA } from "../actionType.js/actionType"

export const getData =(item)=>{
  return{
    type: LOAD_DATA,
    payload: item
  } 
}