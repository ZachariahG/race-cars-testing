import { GasCar } from "../src/gascar";

describe('GasCar', () => {
    let testCar: GasCar;

    beforeEach(()=> {
        testCar = new GasCar('Team A');
    });

    test('should set team and fuel properties from constructor parameters', () => {
        expect(testCar.team).toBe('Team A');
        expect(testCar.fuel).toBe(10);
    });

    test('intitialize speed at 0', ()=> {
        expect(testCar.speed).toBe(0);
    });

    test('increment speed to 2 after one accelerate & decrement fuel by 1', () => {
        testCar.accelerate();
        expect(testCar.speed).toBe(2);
        expect(testCar.fuel).toBe(9);
    });

    test('increment speed to 4 after two accelerates & decrement fuel by 2', () => {
        testCar.accelerate();
        testCar.accelerate();
        expect(testCar.speed).toBe(4);
        expect(testCar.fuel).toBe(8);
    });

    test('return false when fuel is greater than 0', () => {
        expect(testCar.isFuelEmpty()).toBe(false);
    });

})