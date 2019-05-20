import { takeLatest, all  }  from 'redux-saga/effects';
import watchRegisterUserSaga from './registerSaga';

export default function* rootSaga () {
    yield all([
        watchRegisterUserSaga()
    ])
}