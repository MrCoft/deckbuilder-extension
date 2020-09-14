<script>
import VIcon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/plus';
import { storeGetters, storeActions } from '@store/helpers';


export default {
  components: {
    VIcon,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      msg: '',
    };
  },
  created() {
    console.log(this.name);
  },

  methods: {
    ...storeGetters,
    ...storeActions,

    async onClick() {
      this.addCard(this.name);
      
      this.msg = `+1 (${this.deck.map(card => card.count).reduce((a, b) => a + b, 0)})`;
    },
  },
};
</script>

<template>
  <div class="deckbuilder-overlay" @click="onClick">
    <i class="fe-home" />
    <v-icon name="plus" />
    <p>Hello {{ name }}!</p>
    <p>{{ msg }}</p>
  </div>
</template>

<style lang="scss">
.deckbuilder-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  text-align: right;
}
</style>
