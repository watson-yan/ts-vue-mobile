<template>
  <div>
    <p>Hello</p>

    <van-button type="primary">主要按钮</van-button>
    <!-- <van-switch v-model="checked" /> -->
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Dialog } from 'vant';
export default Vue.extend({
  data() {
    return {
      checked: false,
    };
  },
  mounted() {
    // Dialog({ message: 'Hello'});
  },
});
</script>
