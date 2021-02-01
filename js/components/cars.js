class Car {
    constructor(carName, isOn, tankLeft, usage, mileage) {
        this.carName = carName;
        this.isOn = isOn;
        this.tankLeft = tankLeft; // litrai deg
        this.usage = usage; // litrai /100km
        this.mileage = mileage;
    }

    model() {
        console.log(`Automobilio modelis yra ${this.carName}.`);
    }

    uzvesti() {
        if (this.isOn === true) {
            console.log(`Masina jau uzvesta. Geriau negadink starterio!`);
            return false;
        }
        this.isOn = true;
        console.log(`${this.carName} dabar yra uzvesta.`);
    }

    uzgesinti() {
        this.isOn = false;
        console.log(`${this.carName} buvo uzgesinta. Negalite vaziuoti kol neuzvesite automobilio.`);
    }

    sanaudos(n) {
        console.log(`Su ${this.carName} norint nuvaziuoti ${n} kilometru reiketu ${this.usage * n / 100} litru degalu.`);
    }

    vaziuoti(n) {
        const gasPerDist = this.usage * n / 100;

        if (this.isOn !== true) {
            console.log(`${this.carName} siuo metu neuzvesta. Uzvesk!`);
            return false;
        }

        if (gasPerDist > this.tankLeft) {
            console.log(`Neuzteks degalu nuvaziuoti ${n} kilometru.`);
            return false;
        }
        this.tankLeft -= gasPerDist;
        this.mileage += n;
        console.log(`${this.carName} sekmingai nuvaziavo ${n} kilometru. Dabartine rida yra ${this.mileage} km.`);
    }

    likoDegalu() {
        console.log(`${this.carName} automobiliyje siuo metu yra ${this.tankLeft} litrai degalu.`);
    }

}

export { Car }
