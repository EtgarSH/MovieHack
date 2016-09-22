import * as types from './actionTypes';
import fetchMovies from '../../services/boilerData';

export function fetchMoviesAction() {
  return {type: types.MOVIES_LOADING_STARTED, movies: fetchMovies()};
}
