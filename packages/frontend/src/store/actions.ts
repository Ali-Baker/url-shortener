import { all, shorten } from '../api';

export enum Actions {
  getAllUrls = 'getAllUrls',
  postNewUrl = 'postNewUrl'
}

export const actions = {
  [Actions.getAllUrls]({ commit }: any) {
    all().then((response: any) => {
      commit('GET_ALL_URLS', response.data);
    }).catch((error: any) => {
      console.error(error);
    });
  },

  [Actions.postNewUrl]({ commit }: any, fullUrl: string) {
    return new Promise((resolve, reject) => {
      shorten(fullUrl).then((response) => {
        commit('ADD_TO_URLS', response.data);
        resolve(response.data);
      }).catch(reject);
    });
  },
};
