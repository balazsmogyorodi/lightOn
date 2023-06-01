import Lampa from "./lampa.js";
class JatekTer {
  #db;
  #allapotLista;
  #meret;
  #lepes;

  constructor() {
    this.#allapotLista = [];
    this.#db = 0;
    this.#lepes = 0;
    for (let index = 0; index < 9; index++) {
      this.#allapotLista.push(this.#randomizalo());
    }
    console.log(this.#allapotLista);
    this.#setAllapotLista();
    this.#ellenorzes();
    console.log(this.#db);
    this.#init();
  }

  #setAllapotLista() {}

  #szomszedokKeresese() {}

  #init() {
    const szuloElem = $("article");
    for (let index = 0; index < this.#allapotLista.length; index++) {
      new Lampa(index, szuloElem, this.#allapotLista[index]);
    }
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

  #randomizalo(){
   const lampaMeghatarozo = Math.floor(Math.random() * 11);
   if (lampaMeghatarozo > 5){
    return true;
   } else {
    return false;
   }
  }
}

export default JatekTer;
