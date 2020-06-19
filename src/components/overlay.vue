<script>
import VIcon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/plus'


export default {
  components: {
    VIcon,
  },
  props: {
    name: {
      type: String,
    }
  },
  data() {
    return {
      msg: "",
    }
  },
  created() {
    console.log(this.name)
  },

  methods: {
    onClick() {
      console.log('click')
      this.msg = '+1 (60)'

      chrome.storage.sync.get('deck', result => {
        console.log('result')
      })

      chrome.storage.sync.set({ "yourBody": "myBody" }, function(){
          //  A data saved callback omg so fancy
      });

      chrome.storage.sync.get(/* String or Array */["yourBody"], function(items){
          //  items = [ { "yourBody": "myBody" } ]
      });
    },
  },
};
</script>

<template>
  <div class="deckbuilder-overlay" @click="onClick">
    <i class="fe-home"/>
    <v-icon name="plus"/>
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
