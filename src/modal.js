export default {
    props: {
        show: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            // we have to use current_show var because show prop will not be
            // updated if we don't use `:show.sync=` in parent component
            current_show: this.show
        };
    },
    mounted() {
        document.addEventListener('keydown', (e) => {
            if (this.show && e.keyCode === 27) {
                this.cancel();
            }
        });
    },
    watch: {
        show(new_val) {
            this.current_show = new_val;
        },
        current_show(new_val) {
            if (new_val !== this.show) {
                // this is Vue's fancy way of doing `this.show = false`
                this.$emit('update:show', new_val);
            }
        }
    },
    methods: {
        close() {
            this.current_show = false;
        },
        cancel() {
            this.close();
            this.$emit('cancel');
        },
        ok() {
            this.close();
            this.$emit('ok');
        }
    }
};
