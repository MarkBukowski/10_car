import { Car } from './components/cars.js';

const car = new Car('BMW', false, 5, 2.5, 0);

console.log(`Komandu pavyzdziai:

car.model(), 
car.uzvesti(),
car.uzgesinti(),
car.sanaudos(20),
car.sanaudos(400),
car.uzvesti(),
car.vaziuoti(20),
car.likoDegalu(),
car.vaziuoti(2000),
car.vaziuoti(20),
car.likoDegalu(),
`);
