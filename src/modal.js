export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  mounted: function () {
    document.addEventListener('keydown', this.onEscape);
  },
  unmounted: function () {
    document.removeEventListener('keydown', this.onEscape);
  },
  methods: {
    onEscape: function (e) {
      if (this.show && e.keyCode === 27) {
        this.cancel();
      }
    },
    close: function () {
      // this is Vue's fancy way of doing `this.show = false`
      this.$emit('update:show', false);
    },
    cancel: function () {
      this.close();
      this.$emit('cancel');
    },
    ok: function (e) {
      e.preventDefault();
      this.close();
      this.$emit('ok');
    }
  }
};
