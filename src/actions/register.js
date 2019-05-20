import { REGISTER_USER, REGISTER_USER_ERROR, REGISTER_USER_SUCCESS } from '../constanst/index';

export const registerUser = (payload) => {
   return {
       type: REGISTER_USER,
       payload,
   }
}

export const registerUserSuccess = (payload) => {
    return {
        type: REGISTER_USER_SUCCESS,
        payload
    }
}

export const registerError = (payload) => {
    return {
        type: REGISTER_USER_ERROR,
        payload
    }
}