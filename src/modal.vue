<template>
  <div class="modal-backdrop in" @click="cancel" v-show="show"></div>
  <div class="modal show" v-show="show" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <button type="button" class="close"><span>&times;</span></button>
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
          <button @click="ok" type="button" class="btn btn-primary">Ok</button>
          <button @click="cancel" type="button" class="btn btn-default">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script src="./modal.js"></script>
