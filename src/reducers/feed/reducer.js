import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  movies: []
});

export default function counter(state = initialState, action = {}) {
  switch (action.type) {

    default:
      return state;
  }
}
