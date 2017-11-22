import { IAppState } from './store';
import { INCREMENT } from "./actions";
import { tassign } from 'tassign'
import { Map } from 'immutable';

export const INITIAL_STATE: IAppState = {
  counter: 0
}

export interface IAppState {
  counter: number;
}

export function rootReducer(state: Map<string, any>, action): Map<string, any> {
  switch (action.type) {
    case INCREMENT:
      return state.set('counter', state.get('counter') + 1);

  }
  return state;
}