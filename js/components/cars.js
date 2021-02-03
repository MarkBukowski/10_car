class Car {
    constructor(carName, tankLeft, usage, mileage) {
        this.carName = carName;
        this.isOn = false;
        this.tankLeft = tankLeft; // litrai deg
        this.usage = usage; // litrai /100km
        this.mileage = mileage;
    }

    model() {
        console.log(`Automobilio modelis yra ${this.carName}.`);
    }

    uzvesti() {
        if (this.isOn) {
            console.log(`Masina jau uzvesta. Geriau negadink starterio!`);
            return false;
        }
        if (this.tankLeft === 0) {
            console.log('masina nebeturi degalu ir neuzsiveda.');
            return false;
        }
        this.isOn = true;
        console.log(`${this.carName} dabar yra uzvesta.`);
    }

    uzgesinti() {
        this.isOn = false;
        console.log(`${this.carName} yra uzgesinta. Negalite vaziuoti kol neuzvesite automobilio arba neipilsite benzo.`);
    }

    sanaudos(n) {
        console.log(`Su ${this.carName} norint nuvaziuoti ${n} kilometru reiketu ${this.usage * n / 100} litru degalu.`);
    }

    vaziuoti(n) {
        const maxDist = this.tankLeft / this.usage * 100;

        if (this.isOn !== true) {
            console.log(`${this.carName} siuo metu neuzvesta. Uzvesk!`);
            return false;
        }

        if (maxDist >= n && this.isOn === true) {
            this.mileage += n;
            this.tankLeft -= this.usage * n / 100;
            console.log(`${this.carName} sekmingai nuvaziavo ${n} kilometru. Dabartine rida yra ${this.mileage} km.`);
        } else {
            this.mileage += maxDist;
            this.tankLeft = 0;
            console.log(`${this.carName} nuvaziavo ${maxDist} kilometru ir uzgeso nes baigesi benzas. Liko nenuvaziuoti ${n - maxDist}`);
            this.uzgesinti();

        }
    }

    likoDegalu() {
        console.log(`${this.carName} automobiliyje siuo metu yra ${this.tankLeft} litrai degalu.`);
    }

}

export { Car }
