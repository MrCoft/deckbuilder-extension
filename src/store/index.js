import Vue from 'vue';
import Vuex from 'vuex';
import { storageGet, storageSet } from './chromeStorage';

Vue.use(Vuex);

export const types = {
  ADD_CARD: 'ADD_CARD',
  CLEAR: 'CLEAR',
};

export default new Vuex.Store({
  state: {
    deck: {},
  },
  getters: {
    deck: (state) => state.deck,
  },
  mutations: {
    [types.ADD_CARD](state, { name }) {
      let card;
      if (name in state.deck) {
        card = state.deck[name];
      } else {
        card = {
          count: 0,
        };
        state.deck[name] = card;
      }
      card.count++;
    },
    [types.CLEAR](state) {
      state.deck = {};
    },
  },
  actions: {
    async addCard({ commit, getters }, { name }) {
      commit(types.ADD_CARD, {
        name,
      });
      await storageSet('deck', getters.deck);
    },
    async clear({ commit, getters }) {
      commit(types.CLEAR);
      await storageSet('deck', getters.deck)
    }
  },
});
