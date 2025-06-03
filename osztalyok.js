
class Auto {
    constructor(modell, evjarat, szin) {
        this.modell = modell;
        this.evjarat = evjarat;
        this.szin = szin;
    }
    // Getter metódusok
    get Modell() {
        return this.modell;
    }
    get Evjarat() {
        return this.evjarat;
    }
    get Szin() {
        return this.szin;
    }
    // Setter metódusok
    set Modell(ujModell) {
        this.modell = ujModell;
    }
    set Evjarat(ujEvjarat) {
        this.evjarat = ujEvjarat;
    }
    set Szin(ujSzin) {
        this.szin = ujSzin;
    }

    autoEletkor() {
        const aktualisEv = new Date().getFullYear();
        return aktualisEv - this.evjarat;
    }
}

class Auto2 extends Auto {
    constructor(modell, evjarat, szin, fogyasztas, uzemanyagTankMeret) {
        super(modell, evjarat, szin);
        this.fogyasztas = fogyasztas;
        this.uzemanyagTankMeret = uzemanyagTankMeret;
    }
}

const auto1 = new Auto("Toyota Corolla", 2015, "kék");
const auto2 = new Auto("Honda Civic", 2018, "piros");
console.log(`Az ${auto1.modell} autó életkora: ${auto1.autoEletkor()} év.`);

class Szamitogep{
    constructor(memoria, kapcsolva) {
        this.memoria = 1024;
        this.kapcsolva = false;
    }
    kapcsol() {
        if (this.kapcsolva == false) {
            return this.kapcsolva = true;
        }
        else {
            return this.kapcsolva = false;
        }
    }
    programMasol(memoria) {
        if (this.kapcsolva ==  true && this.memoria >= memoria) {
            this.memoria -= memoria;
            return true;
        }
        else {
            return false;
    
        }
    }
}
const gep1 = new Szamitogep();
const gep2 = new Szamitogep(2048, false);
console.log(gep1.kapcsol());
console.log(gep1.programMasol(800));
console.log(gep1.programMasol(400));
console.log(gep2.programMasol(1));

class Háromszög {
    constructor(a, b, c, alfa, beta, gamma) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.alfa = alfa;
        this.beta = beta;
        this.gamma = gamma;
    }
    kerulet() {
        return this.a + this.b + this.c;
    }
    terulet() {
        const s = this.kerulet() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
    egyenloszaru() {
        if ((this.a === this.b || this.b === this.c || this.a === this.c || this.alfa === this.beta || this.beta === this.gamma || this.alfa === this.gamma)) {
            return true;
        }
        else {
           return false;
        }
    }
    szabalyos() {
        if ((this.a === this.b && this.b === this.c) && (this.alfa === this.beta && this.beta === this.gamma)) {
            return true;
        }
        else {
            return false;
        }
    }
    
}
const h = new Háromszög(3, 3, 5, 60, 60, 70);
console.log(`A háromszög kerülete: ${h.kerulet()}`);
console.log(`A háromszög területe: ${h.terulet()}`);
console.log(`A háromszög egyenlőszárú: ${h.egyenloszaru()}`);
console.log(`A háromszög szabályos: ${h.szabalyos()}`);

