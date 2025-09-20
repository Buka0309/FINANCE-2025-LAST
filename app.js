// Дэлгэцийн контроллер
var uiController = (function () {})();
// Санхүүгийн контроллер
var financeController = (function () {})();
// Холбогч контроллер
var appController = (function (uiController, fnController) {
  var ctrlAddItem = function () {
    console.log("Delgetsees ogogdol avah hesge");
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
