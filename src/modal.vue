<template>
  <div v-show="show">
    <div class="modal-backdrop in"></div>
    <div
      @click="cancel"
      class="modal show"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div
          class="modal-content"
          @click.stop
        >
          <div class="modal-header">
            <button
              @click="cancel"
              type="button"
              class="close"
            ><span>&times;</span></button>
            <h4 class="modal-title">
              <slot name="title">
                Modal Title
              </slot>
            </h4>
          </div>
          <div class="modal-body">
            <p>
              <slot>
                One fine body&hellip;
              </slot>
            </p>
          </div>
          <div class="modal-footer">
            <button
              @click="ok"
              type="button"
              class="btn btn-primary btn-modal-ok"
            >
              <slot name="button_ok">
                Ok
              </slot>
            </button>
            <button
              @click="cancel"
              type="button"
              class="btn btn-default btn-modal-cancel"
            >
              <slot name="button_cancel">
                Cancel
              </slot>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./modal.js"></script>
