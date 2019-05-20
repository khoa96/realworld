import { createStore, applyMiddleware } from 'redux';
import  createdSagaMiddleware  from 'redux-saga';
import rootReducer from '../reducer/index';
import rootSaga from '../saga/index';

const sagaMiddleware = createdSagaMiddleware();
const rootStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default rootStore;