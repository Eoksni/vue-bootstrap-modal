export default {
    props: {
        show: {
            type: Boolean,
            required: true
        }
    },
    mounted: function() {
        document.addEventListener('keydown', function(e) {
            if (this.show && e.keyCode === 27) {
                this.cancel();
            }
        });
    },
    methods: {
        close: function() {
            // this is Vue's fancy way of doing `this.show = false`
            this.$emit('update:show', false);
        },
        cancel: function() {
            this.close();
            this.$emit('cancel');
        },
        ok: function() {
            this.close();
            this.$emit('ok');
        }
    }
};
