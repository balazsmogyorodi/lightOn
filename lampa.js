class Lampa {
    #allapot;
    #id;
    #divElem;

    constructor(id, allapot, szuloELEM) {
        console.log(szuloELEM);
        this.#allapot = allapot;
        this.#divElem = $(`<div id="${id}"></div>`);
        this.#divElem.addClass("kor");
        
        this.#divElem.addClass(this.#allapot === true ? "sarga" : "zold");
        console.log(this.#divElem);
        szuloELEM.append(this.#divElem);
    }


    setAllapot() {



    }

    #szinBeallit() {


    }

    #kattintasTrigger() {
        const esemenyTrigger = new CustomEvent("kapcsolas", { detail: this });
        window.dispatchEvent(esemenyTrigger);



    }



}

export default Lampa;



