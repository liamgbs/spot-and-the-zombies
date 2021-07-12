import { BOTTOM_WALL_CHAR, GRID_DIMENSION_X, GRID_DIMENSION_Y, PILL_CHAR, PLAYER_CHAR, SIDE_WALL_CHAR, SPACE_CHAR, SWORD_CHAR, TOP_WALL_CHAR, ZOMBIE_CHAR } from "./consts";
import { clear, write } from "./terminal";
import { inSamePosition } from "./utils";

export const makeGrid = (Player: Player, Zombies: Zombies, Pickups: Pickups, Modifiers: Modifiers, Game: Game) => {
    const draw = () => {

        clear();

        const player = Player.get();
        const zombies = Zombies.get();
        const pickups = Pickups.get();
        const gameData = Game.getData();
        const modifierData = Modifiers.getData();

        write(`Score: ${gameData.points}\n`);
        write(`Moves: ${gameData.moves}\n`);
        
        if (modifierData.isDangerousUntil) {
            write(`Dangerous`, 'red')
        }

        write('\n\n')

        for (let y = 0; y < GRID_DIMENSION_Y; y++) {
            for (let x = 0; x < GRID_DIMENSION_X; x++) {

                (() => {

                    for (const zombie of zombies) {
                        const z = zombie.get();
                        if (inSamePosition(z, { x, y })) {
                            return write(ZOMBIE_CHAR, "green");
                        }
                    }

                    for (const pickup of pickups) {
                        if (inSamePosition(pickup, { x, y })) {
                            switch (pickup.type) {
                                case "pill":
                                    return write(PILL_CHAR)
                                case "sword":
                                    return write(SWORD_CHAR)
                            }
                        }
                    }

                    if (inSamePosition(player, { x, y })) {
                        return write(PLAYER_CHAR, modifierData.isDangerousUntil ? 'red' : 'default')
                    }

                    if (x === 0 || x === GRID_DIMENSION_X - 1) {
                        return write(SIDE_WALL_CHAR);
                    }

                    if (y === 0) {
                        return write(TOP_WALL_CHAR)
                    }

                    if (y === GRID_DIMENSION_Y - 1) {
                        return write(BOTTOM_WALL_CHAR)
                    }

                    return write(SPACE_CHAR);
                })()

            }

            write('\n')

        }
    };

    return {
        draw
    }
}