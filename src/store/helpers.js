import { mapGetters, mapActions } from 'vuex';

export const storeGetters = mapGetters(['deck']);

export const storeActions = mapActions(['addCard', 'clear']);
