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
    return {};
  },
  created() {
    console.log(this.name)
  }
};
</script>

<template>
  <div class="deckbuilder-overlay">
    <i class="fe-home"/>
    <v-icon name="plus"/>
    <p>Hello {{ name }}!</p>
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
