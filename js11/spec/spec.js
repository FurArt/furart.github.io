describe('First test what can i do :)', function () {
    it('Find container-fluid ', function () {
        expect(document.querySelectorAll('.container-fluid').length).not.toBe(0);
    });
      it('Find row ', function () {
        var el = document.querySelectorAll('.row');
        for (var i = 0; i < el.length; i++) {
                  expect(el[i].className).toBe('row');
      }
      });

      it('This fine code should be create TEST, and check checkbox: ', function () {
        var el = document.querySelectorAll("input[type='checkbox']");
        for (var i = 0; i < el.length; i++) {
                  expect(el[i].type).toEqual('checkbox');
      }
      });

      it('This fine code should be create TEST, and check button: ', function () {
        var el = document.querySelectorAll("input[type='button']");
        for (var i = 0; i < el.length; i++) {
                  expect(el[i].value).toEqual('Проверить мои результаты');
      }
      });

return;
});
