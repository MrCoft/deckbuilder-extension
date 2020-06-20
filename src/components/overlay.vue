<script>
import VIcon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/plus';

async function storageGet(key) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.get(key, result => {
        resolve(result);
      });
    } catch (error) {
      reject(error);
    }
  });
}
async function storageSet(key, value) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.set({ [key]: value }, result => {
        resolve(result);
      });
    } catch (error) {
      reject(error);
    }
  });
}

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
    async onClick() {
      let { deck } = await storageGet('deck');
      if (!deck) {
        deck = {};
      }
      let card;
      if (this.name in deck) {
        card = deck[this.name];
      } else {
        card = { count: 0 };
        deck[this.name] = card;
      }
      card.count++;
      console.log(deck);
      await storageSet('deck', deck);

      this.msg = `+1 (${Object.values(deck).map(card => card.count).reduce((a, b) => a + b, 0)})`;
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
