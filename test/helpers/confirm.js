import Modal from 'src/modal.vue';

export default {
  components: {
    Modal
  },
  data: function() {
    return {
      show: true
    };
  },
  methods: {
    ok: function() {
      this.$emit('ok');
    },
    cancel: function() {
      this.$emit('cancel');
    }
  }
};
