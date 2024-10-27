 import { Racer } from './racer';
 
 export const findRacersWithEmptyFuel = (racers: Racer[]) => {
       const fuelIsEmpty: Racer[] = [];

       for (let i = 0; i < racers.length; i++) {
            if (racers[i].isFuelEmpty()) {
                fuelIsEmpty.push(racers[i]);
            }
       }
       return fuelIsEmpty;
 }

 export const findAverageSpeed = (racers: Racer[]): number => {
        if (racers.length === 0) {
            return 0;
        }

        let totalSpeed = 0;

        for (let i =0; i < racers.length; i++) {
            totalSpeed += racers[i].speed;
        }

        return Math.floor(totalSpeed / racers.length);
 }

 export const getFasterRacer = (racerA: Racer, racerB: Racer): Racer | null => {
        if (racerA.speed > racerB.speed) {
            return racerA;
        } else if (racerA.speed < racerB.speed) {
            return racerB
        } else {
            return null;
        }
 }

