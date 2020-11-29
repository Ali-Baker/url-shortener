import { State } from './state';

export enum MutationTypes {
  GET_ALL_URLS = 'GET_ALL_URLS',
  ADD_TO_URLS = 'ADD_TO_URLS',
}

export type Mutations<S = State> = {
  [MutationTypes.GET_ALL_URLS](state: S, payload: []): void;
  [MutationTypes.ADD_TO_URLS](state: S, payload: []): void;
}

export const mutations = {
  [MutationTypes.GET_ALL_URLS](state: any, payload: {
    short: string;
    full: string;
    clicks: number;
  }) {
    state.urls = payload;
  },

  [MutationTypes.ADD_TO_URLS](state: any, payload: {
    short: string;
    full: string;
    clicks: number;
    duplicate: boolean;
  }) {
    if (!payload.duplicate) {
      state.urls.push(payload);
    }
  },
};
