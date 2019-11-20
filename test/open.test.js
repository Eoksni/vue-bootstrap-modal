import { open, wait_for_result, mount, unmount } from 'src/open.js';
import Confirm from './helpers/confirm.vue';
import Vue from 'vue';

describe('open', function() {
  it('should mount and unmount element', function() {
    const initialLength = document.body.childNodes.length;

    const comp = mount(Vue.extend(Confirm));
    expect(document.body.childNodes.length).toEqual(initialLength + 1);
    unmount(comp);
    expect(document.body.childNodes.length).toEqual(initialLength);
  });

  it('should wait for result', function(done) {
    const initialLength = document.body.childNodes.length;

    const comp = mount(Vue.extend(Confirm));
    const promise = wait_for_result(comp);

    comp.ok();

    promise.then(function() {
      unmount(comp);
      expect(document.body.childNodes.length).toEqual(initialLength);
      done();
    });
  });

  it('should open and close on ok', function(done) {
    const initialLength = document.body.childNodes.length;

    const promise = open(Vue.extend(Confirm));
    const button_ok = document.getElementsByClassName("btn-primary")[0];
    button_ok.click();
    promise.then(function() {
      expect(document.body.childNodes.length).toEqual(initialLength);
      done();
    });
  });

  it('should open and close on cancel', function(done) {
    const initialLength = document.body.childNodes.length;

    const promise = open(Vue.extend(Confirm));
    const button_cancel = document.getElementsByClassName("btn-default")[0];
    button_cancel.click();
    promise.catch(function() {
      expect(document.body.childNodes.length).toEqual(initialLength);
      done();
    });
  });
});
