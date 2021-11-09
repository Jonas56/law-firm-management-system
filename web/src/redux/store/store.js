import casesReducer  from '../reducers/cases';
import { combineReducers , createStore} from 'redux';


export default  () => {
    const store = createStore(
        combineReducers({
            cases : casesReducer 
        })
    );

    return store;

}