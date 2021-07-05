import { BOTTOM_WALL_CHAR, GRID_DIMENSION_X, GRID_DIMENSION_Y, PILL_CHAR, PLAYER_CHAR, SIDE_WALL_CHAR, SPACE_CHAR, TOP_WALL_CHAR, ZOMBIE_CHAR } from "./consts";
import { clear, write } from "./terminal";

export const makeGrid = (Player: Player, Zombies: Zombies, Pickups: Pickups, Game: Game) => {
    const draw = () => {

        clear();

        const player = Player.get();
        const zombies = Zombies.get();
        const pickups = Pickups.get();
        const gameData = Game.getData();

        write(`Score: ${gameData.points}\n`)
        for (let y = 0; y < GRID_DIMENSION_Y; y++) {
            for (let x = 0; x < GRID_DIMENSION_X; x++) {

                (() => {
                    
                    for (const zombie of zombies) {
                        const z = zombie.get();
                        if (z.x === x && z.y === y) {
                            write(ZOMBIE_CHAR, "green");
                            return;
                        }
                    }

                    for(const pickup of pickups) {
                        if (pickup.x === x && pickup.y === y) {
                            switch (pickup.type) {
                                case "pill":
                                    return write(PILL_CHAR)
                            }
                        }
                    }
                    
                    if (y === player.y && x === player.x) {
                        write(PLAYER_CHAR)
                    }
        
                    else if (x === 0 || x === GRID_DIMENSION_X - 1) {
                        write(SIDE_WALL_CHAR);
                    }
        
                    else if (y === 0) {
                        write(TOP_WALL_CHAR)
                    }
        
                    else if (y === GRID_DIMENSION_Y - 1) {
                        write(BOTTOM_WALL_CHAR)
                    }
        
                    else write(SPACE_CHAR);
                })()
                
            }
    
            write('\n')
            
        }
    };

    return {
        draw
    }
}