import Modal from 'src/modal.vue';

export default {
  components: {
    Modal
  },
  data: function () {
    return {
      show: true
    };
  },
  methods: {
    ok: function () {
      this.$emit('ok', 'just some confirmation string or payload object');
    },
    cancel: function () {
      this.$emit('cancel', 'just some cancellation string or error object');
    }
  }
};
