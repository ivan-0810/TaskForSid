import * as types from './actionTypes';

export const loadMovies = (movies) => (dispatch) => {
  console.log(movies);
  dispatch({
    type: types.LOAD_MOVIES,
    payload: movies,
  });
};
export const addMovie = (name, rating, duration) => (dispatch) => {
  dispatch({
    type: types.ADD_MOVIE,
    payload: name,
    rating,
    duration,
  });
};
export const updateMovie = (id, finalMovie) => (dispatch) => {
  dispatch({
    type: types.UPDATE_MOVIE,
    payload: { id, finalMovie },
  });
};

export const findMovie = (name) => (dispatch) => {
    dispatch({
      type: types.FIND_MOVIE,
      payload: { name },
    });
  };