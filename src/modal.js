export default {
    props: ['show'],
    ready() {
        document.addEventListener('keydown', (e) => {
            if (this.show && e.keyCode === 27) {
                this.cancel();
            }
        });
    },
    methods: {
        close() {
            this.show = false;
        },
        cancel() {
            this.$emit('cancel');
            this.close();
        },
        ok() {
            this.$emit('ok');
            this.close();
        }
    }
};
