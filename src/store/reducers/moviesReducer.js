import * as types from '../actions/actionTypes';
import { v1 } from 'uuid';

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_MOVIES:
      return (state = action.payload);

    case types.ADD_MOVIE:
      return [
        {
          id: v1,
          name: action.payload.name,
          rating: action.payload.rating,
          duration: action.payload.duration,
        },
        ...state,
      ];
    case types.UPDATE_MOVIE:
      return state.map((movie) =>
        movie.id !== action.payload.id
          ? movie
          : {
              name:action.payload.finalMovie.name,
              rating: action.payload.finalMovie.rating,
              duration: action.payload.finalMovie.duration,
            }
      );
    case types.FIND_MOVIE:
      const actionName = action.payload.name.toLowerCase()
      return state.filter(movie => movie.name.slice(0, actionName.length)
      .toLowerCase() === actionName )

    default:
      return state;
  }
};

export default moviesReducer;
