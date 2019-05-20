import { takeLatest, call, put } from 'redux-saga/effects';
import { registerUserSuccess, registerError } from '../actions/register';
import { REGISTER_USER } from '../constanst/index';
import axios from 'axios';

const intance = axios.create({
    baseURL: 'https://conduit.productionready.io/api'
});

function* workRegisterUserSaga(action) {
    const user = action.payload;
    const data = {
        user: user
    };
    try {
        const res = yield intance.post('/users', data);
        yield put(registerUserSuccess(res.data.user))
    } catch (error) {
        yield put(registerError(error))
    }
}

export default function* watchRegisterUserSaga() {
    yield takeLatest(REGISTER_USER, workRegisterUserSaga);
}
