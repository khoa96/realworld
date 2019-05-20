import { REGISTER_USER_SUCCESS, REGISTER_USER_ERROR, REGISTER_USER } from '../constanst/index';

const registerInitialState = {
    isRegisterSuccess: false,
    isProcess: false,
}

const registerReducer = (state = registerInitialState, action) => {
    const response = action.payload;
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                isProcess: true
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                response,
                isProcess: false,
                isRegisterSuccess: true
            }
        case REGISTER_USER_ERROR:
            return {
                ...state,
                response,
                isProcess: false
            }
        default:
            return state
    }
}
export default registerReducer;