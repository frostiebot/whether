// Things that are not browsers don't have either local or session
// storage - tests in particular. Mock 'em like it's hot.
function storageMock() {
    var storage = {};

    return {
        setItem: function(key, value) {
            storage[key] = value || '';
        },
        getItem: function(key) {
            return storage[key] || null;
        },
        removeItem: function(key) {
            delete storage[key];
        },
        get length() {
            return Object.keys(storage).length;
        },
        key: function(i) {
            var keys = Object.keys(storage);
            return keys[i] || null;
        }
    };
}

module.exports = {
    storageMock: storageMock
};
