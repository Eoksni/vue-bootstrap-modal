const generateUniqueId = (() => {
    let last_id = 0;
    return () => {
        return last_id++;
    };
})();

export function open() {
    const elem = document.createElement("div");
    elem.id = `modal-${generateUniqueId()}`;
    document.body.insertBefore(elem, document.body.childNodes[0]);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            elem.parentNode.removeChild(elem);
            resolve({});
        }, 0);
    });
}
