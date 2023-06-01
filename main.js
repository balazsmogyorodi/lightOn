import JatekTer from "./jatekTer.js";

$(function () {
  const szuloElem = $(".ujra");
  new JatekTer();
  szuloElem.on("click", () => {
    new JatekTer();
  });
});
