[![Build Status](https://travis-ci.org/emotz/vue-bootstrap-modal.svg?branch=master)](https://travis-ci.org/emotz/vue-bootstrap-modal.svg?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# vue-bootstrap-modal

Component to use with Vue 2 to show modal dialogs styled with bootstrap.

It doesn't really depend on bootstrap, you can use whatever css styles you want.

# Installation

```bat
npm install https://github.com/emotz/vue-bootstrap-modal
```

# Usage

Tested on Windows, but should work on Linux/MacOS as well.

First you need to include the component using some build software (e.g. webpack with vue-loader).

Then write modal component `confirm.vue`:

```vue
<template>
    <modal :show.sync="show" @ok="ok" @cancel="cancel">
        <span slot="title">Confirm</span>

        Are you sure?
    </modal>
</template>

<script>
import { Modal } from 'vue-bootstrap-modal';

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
            this.$emit('ok', "user confirmed");
        },
        cancel: function() {
            this.$emit('cancel', "user rejected");
        }
    }
};

</script>
```

And then use it as any other component.

Or, use it as a callable function:

```js
import { open } from 'vue-bootstrap-modal';
import Confirm from './confirm.vue';
import Vue from 'vue';

async function ask_confirm() {
    try {
        let msg = await open(Vue.extend(Confirm));
        alert(msg); // will show 'user confirmed' as specified in confirm.vue
    } catch (err) {
        alert(err); // will show 'user rejected' as specified in confirm.vue
    }
}
```
