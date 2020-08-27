import { combineReducers } from 'redux';
import movies from './moviesReducer';
import { reducer as FormReducer} from 'redux-form';

export default combineReducers({
    movies: movies,
    form: FormReducer
})