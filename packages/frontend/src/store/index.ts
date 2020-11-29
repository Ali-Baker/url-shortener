import {
  createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from 'vuex';

import { all } from '../api';

import { State, state } from './state';
import { Getters, getters } from './getters';
import { Mutations, mutations } from './mutations';
import { Actions, actions } from './actions';

const store = createStore({
  state,
  getters,
  mutations,
  actions,
});

export default store;
