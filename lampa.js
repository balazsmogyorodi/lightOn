class Lampa {
    #allapot;
    #id;
    #divElem;

    constructor(id, allapot, szuloELEM) {
        console.log(szuloELEM);
        this.#allapot = allapot;
        this.#divElem = $(`<div id="${id}"></div>`);
        this.#divElem.addClass("kor");
        this.#szinBeallit();
        console.log(this.#divElem);
        szuloELEM.append(this.#divElem);
        this.#divElem.on("click", () =>{
            this.#allapot != this.#allapot;
            this.#szinBeallit();
            this.#kattintasTrigger();
        });
    }


    setAllapot() {



    }

    #szinBeallit() {
        this.#divElem.addClass(this.#allapot === true ? "sarga" : "zold");

    }

    #kattintasTrigger() {
        const esemenyTrigger = new CustomEvent("kapcsolas", { detail: this });
        window.dispatchEvent(esemenyTrigger);



    }



}

export default Lampa;



