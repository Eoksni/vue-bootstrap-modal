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

Then write in your component's template:

```html

<modal :show.sync="showModal" @ok="alert('ok')" @cancel="alert('cancel')">
  <span slot="title">My title</span>

  Just some text!
</modal>

```

or

```js
import { Modal, open } from 'vue-bootstrap-modal';

open(Modal).then(function() {
  alert('ok');
}, function() {
  alert('cancel');
});
```
