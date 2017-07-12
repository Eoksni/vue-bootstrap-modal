import { open } from 'src/open.js';

describe('open', () => {
    it('should create element', (done) => {
        const initialLength = document.body.childNodes.length;
        const promise = open();
        expect(document.body.childNodes.length).toEqual(initialLength + 1);
        promise.then(done);
    });

    it('should not have any leftovers elements', (done) => {
        const initialLength = document.body.childNodes.length;
        const promise = open();
        promise.then(() => {
            expect(document.body.childNodes.length).toEqual(initialLength);
            done();
        });
    });
});
