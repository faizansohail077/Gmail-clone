import { combineReducers, createStore } from 'redux';
import MailReducer from '../features/Reducer/Reducer'


const rootReducer = combineReducers({
  MailReducer
})


export const store = createStore(rootReducer)
