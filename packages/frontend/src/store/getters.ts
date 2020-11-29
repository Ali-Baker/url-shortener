import { GetterTree } from 'vuex';
import { State } from './state';

function truncate(str: string, n: number): string {
  return (str.length > n) ? `${str.substr(0, n - 1)}...` : str;
}

export type Getters = {
  getFormatedlUrls(state: State): any[];
  getFormattedAndSortedUrls(state: State): any[];
}

export const getters: GetterTree<State, State> & Getters = {
  getFormatedlUrls(state) {
    return state.urls.map((url: any) => ({
      ...(url as object),
      full: truncate(url.full || '', 100),
      short: `https://pbid.io/${url.short}`,
    }));
  },
  getFormattedAndSortedUrls(state) {
    return getters.getFormatedlUrls(state).sort((a, b) => b.timestamp - a.timestamp);
  },
};
