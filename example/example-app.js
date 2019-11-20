import Confirm from './confirm/confirm.vue';
import { open } from 'src';
import Vue from "vue";

export default {
  methods: {
    async confirm() {
      let result;
      try {
        result = await open(Vue.extend(Confirm));
        console.log('result', result);
      } catch (err) {
        console.error('err', err);
      }
    }
  }
};
