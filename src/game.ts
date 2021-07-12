import { SWORD_DANGER_DURATION } from "./consts";
import { inSamePosition } from "./utils";


export const makeGame = (Player: Player, Zombies: Zombies, Pickups: Pickups, Modifiers: Modifiers): Game => {

    const gameData = (() => {
        const _gameData: GameData = {
            points: 0,
            moves: 0,
        }
    
        return new Proxy<GameData>(_gameData, {
            set: (target, prop: keyof GameData, value) => {
                target[prop] = value;
                Modifiers.runModifiers({
                    ...target,
                    [prop]: value
                });
                return true;
            }
        })

    })();

    Pickups.addPill();

    const hasLost = () => {
        const player = Player.get();

        for (const Zombie of Zombies.get()) {
            const zombie = Zombie.get();
            if (inSamePosition(player, zombie)) {
                return true;
            }
        }

        return false;
    }

    const tick = (key: string) => {

        const player = Player.get();
        const modifiers = Modifiers.getData();

        switch (key) {
            case 'w':
                Player.up(); break;
            case 'a':
                Player.left(); break;
            case 's':
                Player.down(); break;
            case 'd':
                Player.right(); break;
            default:
                break;
        }

        if (modifiers.isDangerous) {
            Zombies.get().forEach(z => {
                const zombie = z.get()
                if (inSamePosition(zombie, player)) {
                    Zombies.kill(zombie.id)
                }
            })
        }

        Zombies.move();

        Pickups.get().forEach((pickup) => {
            if (!inSamePosition(player, pickup)) return;

            switch (pickup.type) {
                case "pill":
                    gameData.points += pickup.points;
                    Pickups.addPill();
                    break;
                case "sword":
                    Modifiers.makePlayerDangerousUntil(gameData.moves + SWORD_DANGER_DURATION);
                    break;
                default:
                    break;
            }

            Pickups.remove(pickup.id);
        });

        gameData.moves += 1;

        if (gameData.moves % 10 === 0) {
            Pickups.addSword();
        }

    }

    const getData = () => gameData

    return {
        tick,
        hasLost,
        getData
    }
}