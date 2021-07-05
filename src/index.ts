import { makeGrid } from "./grid"
import { makeGame } from "./game"
import { makePlayer } from "./player"
import { close, getKey, write } from "./terminal";
import { makeZombies } from "./zombies";
import { makePickups } from "./pickups";


const player = makePlayer();
const zombies = makeZombies();
const pickups = makePickups();

const game = makeGame(player, zombies, pickups);
const grid = makeGrid(player, zombies, pickups, game);



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
