beforeEach(function () {
  var store = {};

  spyOn(localStorage, 'getItem').andCallFake(function (key) {
    return store[key];
  });
  spyOn(localStorage, 'setItem').andCallFake(function (key, value) {
    return store[key] = value + '';
  });
  spyOn(localStorage, 'clear').andCallFake(function () {
      store = {};
  });
});
