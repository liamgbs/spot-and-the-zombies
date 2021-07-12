import { ZOMBIE_COUNT } from "./consts";
import { makePlayer } from "./player"
import { getRandomX, getRandomY, getRandomNumberBetween } from "./utils";

export const makeZombies = () : Zombies => {
    let zombies : Player[] = [];

    const move = () => {
        for (const zombie of zombies) {
            switch (getRandomNumberBetween(1, 4)) {
                case 1:
                    zombie.up(); break;
                case 2:
                    zombie.down(); break;
                case 3:
                    zombie.left(); break;
                case 4:
                    zombie.right(); break;
                default:
                    break;
            }
        }
    };

    const add = () => {
        zombies.push(makePlayer(
            getRandomX(),
            getRandomY()
        ))
    }

    const kill = (id: string) => {
        zombies = zombies.filter(z => z.get().id !== id);
    }

    const get = () => zombies;

    return {
        move,
        get,
        add,
        kill
    }

}