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
        this.isOn = true;
        console.log(`The ${this.carName} dabar yra uzvesta. BRUMMMMMMM`);
    }
    uzgesinti() {
        this.isOn = false;
        console.log(`The ${this.carName} yra uzgesinta. Negalite vaziuoti kol neuzvesite automobilio.`);
    }

    sanaudos(n) {
        console.log(`Su ${this.carName} norint nuvaziuoti ${n} kilometru reiketu ${this.usage * n / 100} litru degalu.`);
    }

    vaziuoti(n) {
        const gasPerDist = this.usage * n / 100;
        let gasLeft = this.tankLeft;

        if (this.isOn !== true) {
            console.log(`${this.carName} siuo metu neuzvesta. Uzvesk!`);
        } else if (gasPerDist <= gasLeft) {
            console.log(`${this.carName} sekmingai nuvaziavo ${n} kilometru.`);
        } else {
            console.log(`Tokiam atstumui neuzteks degalu.`);
        }
        gasLeft -= gasPerDist;

    }

    likoDegalu() {
        console.log(`${this.carName} automobiliyje siuo metu yra ${this.tankLeft} litrai degalu.`);
    }

}

export { Car }



/* parametrai:
    - ijungta: true/false
    - bake: 5       (litrai)
    - ryja: 2.5     (litrai/100 km)
    - rida: 0
 */