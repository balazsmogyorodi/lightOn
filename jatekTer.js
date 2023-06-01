import Lampa from "./lampa.js";
class JatekTer {
  #db;
  #allapotLista;
  #meret;
  #lepes;
  #valtoztat = false;

  constructor() {
    this.#allapotLista = [];
    this.#db = 0;
    this.#lepes = 0;
    this.#init();
    const szuloElem = $(".ujra");
    szuloElem.on("click", () => {
      this.#valtoztat = true;
      this.#init();
    });
  }

  #setAllapotLista() { }

  #szomszedokKeresese() { }

  #init() {
    const szuloElem = $("article");
    if (this.#valtoztat) {
      szuloElem.empty();
      for (let index = 0; index < 9; index++) {
        this.#allapotLista.splice(this.#allapotLista);
      }
    }
    for (let index = 0; index < 9; index++) {
      this.#allapotLista.push(this.#randomizalo());
    }
    console.log(this.#allapotLista);
    this.#setAllapotLista();
    this.#ellenorzes();
    console.log(this.#db);
    
    for (let index = 0; index < this.#allapotLista.length; index++) {
      new Lampa(index, this.#allapotLista[index], szuloElem);
    }
    this.#valtoztat = false;
  }

  #ellenorzes() {
    for (let index = 0; index < this.#allapotLista.length; index++) {
      if (this.#allapotLista[index] == true) {
        this.#db += 1;
      }
    }
    if (this.#db == 9) {
      console.log("győztél");
    }
  }

  #randomizalo() {
    const lampaMeghatarozo = Math.floor(Math.random() * 11);
    if (lampaMeghatarozo > 8) {
      return true;
    } else {
      return false;
    }
  }
}

export default JatekTer;
