<script>
/**
 * Bootstrap Style Modal Component for Vue
 * Depend on Bootstrap.css
 */

export default {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: 'Modal'
        },
        small: {
            type: Boolean,
            default: false
        },
        large: {
            type: Boolean,
            default: false
        },
        full: {
            type: Boolean,
            default: false
        },
        // 确认按钮text
        okText: {
            type: String,
            default: 'OK'
        },
        // 取消按钮text
        cancelText: {
            type: String,
            default: 'Cancel'
        },
        // 确认按钮className
        okClass: {
            type: String,
            default: 'btn btn-primary'
        },
        // 取消按钮className
        cancelClass: {
            type: String,
            default: 'btn btn-default'
        }
    },
    data() {
        return {
            oked: false
        };
    },
    computed: {
        modalClass() {
            return {
                'modal-lg': this.large,
                'modal-sm': this.small,
                'modal-full': this.full
            }
        }
    },
    mounted() {
        $(this.$el).on('hide.bs.modal', e => {
            this.$emit('hiding');
        });
        $(this.$el).on('shown.bs.modal', e => {
            this.oked = false;
        });
        $(this.$el).on('hidden.bs.modal', e => {
            if (this.oked) {
                this.$emit('ok');
            } else {
                this.$emit('cancel');
            }
        });
        if (this.show) {
            this.showModal();
        }
    },
    watch: {
        show(value) {
            if (value) {
                this.showModal();
            } else {
                this.hideModal();
            }
        }
    },
    methods: {
        ok() {
            this.oked = true;
            this.hideModal();
        },
        cancel() {
            this.oked = false;
            this.hideModal();
        },
        showModal() {
            $(this.$el).modal('show');
        },
        hideModal() {
            $(this.$el).modal('hide');
        }
    }
};
</script>

<template>
    <div class="modal fade"
         role="dialog"
         tabindex="-1">
        <div class="modal-dialog"
             :class="modalClass"
             role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header">
                        <button type="button"
                                class="close"
                                aria-label="Close"
                                @click="hideModal"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title"><slot name="title">{{title}}</slot></h4>
                    </slot>
                </div>
                <form>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                            <button type="submit"
                                    :class="okClass"
                                    @click.prevent="ok">{{okText}}</button>
                            <button type="button"
                                    :class="cancelClass"
                                    @click="hideModal">{{cancelText}}</button>
                        </slot>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
