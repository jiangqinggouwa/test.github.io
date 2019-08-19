import {DECREMENT,DECREMENT_TYPE,INCREMENT,INCREMENT_TYPE}from '../const'
export interface IINCREMENTAction {
    type:INCREMENT_TYPE;
}
export interface IDECREMENTAction{
    type:DECREMENT_TYPE;
}
export type ModifyAction = IINCREMENTAction | IDECREMENTAction;
export const increment = ():IINCREMENTAction => ({
    type:INCREMENT,
})
export const decrement = ():IDECREMENTAction=>({
    type:DECREMENT
})