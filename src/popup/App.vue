<script>
import copy from 'copy-to-clipboard';

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
  data() {
    return {};
  },

  methods: {
    async copyToClipboard() {
      let { deck } = await storageGet('deck');
      let decklist = Object.keys(deck).map(name => `${deck[name].count}x ${name}`).join('\n') + '\n';
      copy(decklist);
    },
    async clear() {
      await storageSet('deck', {});
    },
  }
};
</script>

<template>
  <div>
    <p>Hello world!</p>
    <button @click="copyToClipboard">Copy to clipboard</button>
    <button @click="clear">Clear</button>
  </div>
</template>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
