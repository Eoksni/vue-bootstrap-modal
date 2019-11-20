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
import { Modal } from "vue-bootstrap-modal";

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
      this.$emit("ok", "user confirmed");
    },
    cancel: function() {
      this.$emit("cancel", "user rejected");
    }
  }
};
</script>
```

And then use it as any other component.

Or, use it as a callable function:

```js
import { open } from "vue-bootstrap-modal";
import Confirm from "./confirm.vue";
import Vue from "vue";

async function ask_confirm() {
  try {
    let msg = await open(Vue.extend(Confirm));
    alert(msg); // will show 'user confirmed' as specified in confirm.vue
  } catch (err) {
    alert(err); // will show 'user rejected' as specified in confirm.vue
  }
}
```

# Development

## Vagrant

It sets up virtual machine with development environment.

```sh
# with administrative rights:
vagrant up
```

Login to virtual machine:

```sh
vagrant ssh
```

And then (only once):

```sh
nvm install 10
```

And you are ready to go!

### VSCode Remote SSH Over Vagrant

Set up vscode to have vagrant ssh host:

`F1 -> Remote-SSH: Open configuration File...`

Put there result of `vagrant ssh-config` with replaced hostname `default` to `passwordkeeper` (or the name to your likings):

```ssh
Host default
  HostName 127.0.0.1
  User vagrant
  Port 2222
  UserKnownHostsFile /dev/null
  StrictHostKeyChecking no
  PasswordAuthentication no
  IdentityFile <yourpath>/.vagrant/machines/default/virtualbox/private_key
  IdentitiesOnly yes
  LogLevel FATAL
```

Open `/vagrant` directory.

## Test

```sh
npm run test
# it starts up karma server and prints its url
# open this url in your browser and then check the results in the console
```

## Example

```sh
npm run example
```
