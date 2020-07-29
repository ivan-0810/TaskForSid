import * as types from './actionTypes';

export const loadMovies = (movies) => ( {
    type: types.LOAD_MOVIES,
    payload: movies,

});
export const addMovie = (name, rating, duration) => ({

    type: types.ADD_MOVIE,
    payload: name,
    rating,
    duration,

});
export const updateMovie = (id, finalMovie) => ({

    type: types.UPDATE_MOVIE,
    payload: { id, finalMovie },
  });


export const findMovie = (name) => ({
      type: types.FIND_MOVIE,
      payload: { name },
    });