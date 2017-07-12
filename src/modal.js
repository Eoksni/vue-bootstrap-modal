export default {
    props: {
        show: {
            type: Boolean,
            default: true
        }
    },
    data: function() {
        return {
            // we have to use current_show var because show prop will not be
            // updated if we don't use `:show.sync=` in parent component
            current_show: this.show
        };
    },
    mounted: function() {
        document.addEventListener('keydown', function(e) {
            if (this.show && e.keyCode === 27) {
                this.cancel();
            }
        });
    },
    watch: {
        show: function(new_val) {
            this.current_show = new_val;
        },
        current_show: function(new_val) {
            if (new_val !== this.show) {
                // this is Vue's fancy way of doing `this.show = false`
                this.$emit('update:show', new_val);
            }
        }
    },
    methods: {
        close: function() {
            this.current_show = false;
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
