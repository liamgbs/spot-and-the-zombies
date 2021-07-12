import { makeGrid } from "./grid"
import { makeGame } from "./game"
import { makePlayer } from "./player"
import { close, getKey, write } from "./terminal";
import { makeZombies } from "./zombies";
import { makePickups } from "./pickups";
import { makeModifiers } from "./modifiers";


const player = makePlayer();
const zombies = makeZombies();
const pickups = makePickups();
const modifiers = makeModifiers();

const game = makeGame(player, zombies, pickups, modifiers);
const grid = makeGrid(player, zombies, pickups, modifiers, game);

(async () => {

    while (!game.hasLost()) {
        grid.draw();
        game.tick(await getKey());
    }

    grid.draw();
    
    write('\nYou have lost!\n\n')

    close();
    process.exit(0);
    
})()
