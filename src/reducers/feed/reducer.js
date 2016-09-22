import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState = Immutable({
  movies: []
});

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.MOVIES_LOADED:
      return state.merge({movies: action.movies})

    default:
      return state;
  }
}
