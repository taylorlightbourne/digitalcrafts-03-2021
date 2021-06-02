
import { Users } from '../action-types/action-types';

export const ActionCreators = {

  addProfile: (user) => ({ type: Users.ADD_USER, payload: { user } }),

  updateProfile: (user) => ({ type: Users.UPDATE_USER, payload: { user } }),

  formSubmittionStatus: (status) => ({ type: Users.FORM_SUBMITION_STATUS, payload: { status }}),

  login: (user) => ({ type: Users.LOGIN, payload: { user } })
}

// import {
//     CHANGE_TO_KENDALL,
//     CHANGE_TO_PATRICK,
//   } from "../action-types/user-action-types";
  
//   export const changeToKendall = (dispatch) => {
//     return dispatch({ type: CHANGE_TO_KENDALL });
//   };
//   export const changeToPatrick = (dispatch) => {
//     return dispatch({ type: CHANGE_TO_PATRICK });
//   };