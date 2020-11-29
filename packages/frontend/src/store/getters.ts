import { GetterTree } from 'vuex';
import { State } from './state';

function truncate(str: string, n: number): string {
  return (str.length > n) ? `${str.substr(0, n - 1)}...` : str;
}

export type Getters = {
  getFullUrls(state: State): any[];
}

export const getters: GetterTree<State, State> & Getters = {
  getFullUrls(state: State) {
    return state.urls.map((url: any) => ({
      ...(url as object),
      full: truncate(url.full || '', 100),
    }));
  },
};
