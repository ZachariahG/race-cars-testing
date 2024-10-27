import { findRacersWithEmptyFuel, findAverageSpeed, getFasterRacer } from '../src/racer-functions';
import { GasCar } from '../src/gascar';
import { SolarCar } from '../src/solarcar';
import { Racer } from '../src/racer';

describe('findRacersWithEmptyFuel', () => {
    
    test('should return racers with no fuel from an array of GasCar', () => {
        const racers: GasCar[] = [
            new GasCar('Team A', 0),
            new GasCar('Team B', 5),
            new GasCar('Team C', 0)
        ];
        const result = findRacersWithEmptyFuel(racers);
        expect(result).toEqual([racers[0], racers[2]]);
    });

    test('should return all racers when all have no fuel', () => {
        const racers: GasCar[] = [
            new GasCar('Team A', 0),
            new GasCar('Team B', 0),
            new GasCar('Team C', 0)
        ];
        const result = findRacersWithEmptyFuel(racers);
        expect(result).toEqual(racers);
    });

    test('should return empty array when none have no fuel', () => {
        const racers: GasCar[] = [
            new GasCar('Team A', 5),
            new GasCar('Team B', 10),
            new GasCar('Team C', 3)
        ];
        const result = findRacersWithEmptyFuel(racers);
        expect(result).toEqual([]);
    });

    test('should return empty array when provided with an array of SolarCar', () => {
        const racers: SolarCar[] = [
            new SolarCar('Team A'),
            new SolarCar('Team B')
        ];
        const result = findRacersWithEmptyFuel(racers);
        expect(result).toEqual([]);
    });

    test('should return racers with no fuel from a mix of SolarCar and GasCar', () => {
        const racers: Racer[] = [
            new GasCar('Team A', 0),
            new SolarCar('Team B'),
            new GasCar('Team C', 2)
        ];
        const result = findRacersWithEmptyFuel(racers);
        expect(result).toEqual([racers[0]]);
    });

    test('should return empty array when given an empty array', () => {
        const racers: Racer[] = [];
        const result = findRacersWithEmptyFuel(racers);
        expect(result).toEqual([]);
    });
});

describe('findAverageSpeed', () => {
    
    test('should return the average speed for an array of GasCar with different speeds', () => {
        const carA = new GasCar('Team A', 10);
        const carB = new GasCar('Team B', 20);
        const carC = new GasCar('Team C', 30);

        
        carA.accelerate();
        carB.accelerate(); 
        carC.accelerate(); 
        carC.accelerate(); 

        const racers = [carA, carB, carC]; 
        const result = findAverageSpeed(racers);
        expect(result).toBe(2);
    });

    test('should return the average speed for a mix of SolarCar and GasCar with different speeds', () => {
        const gasCarA = new GasCar('Team A', 15);
        const solarCarB = new SolarCar('Team B');
        const gasCarC = new GasCar('Team C', 25);

       
        gasCarA.accelerate(); 
        gasCarC.accelerate(); 
        gasCarC.accelerate(); 

        const racers = [gasCarA, solarCarB, gasCarC];
        const result = findAverageSpeed(racers);
        expect(result).toBe(2); 
    });

    test('should return 0 for an array of cars that all have 0 speed', () => {
        const racers: Racer[] = [
            new GasCar('Team A', 0),
            new SolarCar('Team B'),
            new GasCar('Team C', 0)
        ];
        const result = findAverageSpeed(racers);
        expect(result).toBe(0);
    });

    test('should return 0 for an empty array', () => {
        const racers: Racer[] = [];
        const result = findAverageSpeed(racers);
        expect(result).toBe(0);
    });
});

describe('getFasterRacer', () => {
    test('should return racerA when racerA is faster', () => {
        const racerA = new GasCar('Team A'); 
        racerA.accelerate(); 
        const racerB = new SolarCar('Team B'); 
        racerB.accelerate(); 
        const result = getFasterRacer(racerA, racerB);
        expect(result).toBe(racerA);
    });

    test('should return racerB when racerB is faster', () => {
        const racerA = new SolarCar('Team A'); 
        racerA.accelerate();
        const racerB = new GasCar('Team B'); 
        racerB.accelerate();
        const result = getFasterRacer(racerA, racerB);
        expect(result).toBe(racerB);
    });

    test('should return null when both racers have the same speed', () => {
        const racerA = new GasCar('Team A'); 
        racerA.accelerate();
        const racerB = new SolarCar('Team B'); 
        racerB.accelerate();
        racerB.accelerate(); 
        const result = getFasterRacer(racerA, racerB);
        expect(result).toBeNull();
    });

    test('should handle a mix of GasCar and SolarCar', () => {
        const racerA = new GasCar('Team A'); 
        racerA.accelerate();
        const racerB = new SolarCar('Team B');
        racerB.accelerate();
        const result = getFasterRacer(racerA, racerB);
        expect(result).toBe(racerA);
    });
});