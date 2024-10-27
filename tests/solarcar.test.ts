import { SolarCar } from "../src/solarcar";

describe('SolarCar', () => {
    let testCar: SolarCar;

    beforeEach(()=> {
        testCar = new SolarCar('Team Solar');
    });

    test('team property is set from the constructor parameter', () => {
        expect(testCar.team).toBe('Team Solar');
    });

    test('speed property starts ay 0', () => {
        expect(testCar.speed).toBe(0);
    });

    test('calling accelerate once increments speed to 1', () => {
        testCar.accelerate();
        expect(testCar.speed).toBe(1);
    });

    test('calling accelerate twice increments speed to 2', () => {
        testCar.accelerate();
        testCar.accelerate();
        expect(testCar.speed).toBe(2);
    });

    test('isFuelEmpty returns false', () => {
        expect(testCar.isFuelEmpty()).toBe(false);
    });
})