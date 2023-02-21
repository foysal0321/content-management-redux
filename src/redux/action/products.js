import { ADD_DATA, LOAD_DATA, REMOVE_DATA, UPDATE_DATA } from "../actionType.js/actionType"

export const getData =(item)=>{
  return{
    type: LOAD_DATA,
    payload: item
  } 
}
export const addData =(item)=>{
  return{
    type: ADD_DATA,
    payload: item
  } 
}
export const removeData =(id)=>{
  return{
    type: REMOVE_DATA,
    payload: id
  } 
}

export const updateData =(item)=>{
  return{
    type: UPDATE_DATA,
    payload: item
  } 
}