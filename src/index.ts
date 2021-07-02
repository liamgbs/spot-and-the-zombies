import { makeGrid } from "./grid"
import { close, getKey } from "./terminal";
import { makePlayer } from "./player"

const dimX = 50;
const dimY = 20;

const player = makePlayer(dimX, dimY);
const grid = makeGrid(dimX, dimY, player);

(async () => {

    while (true) {
        grid.draw();

        const key = await getKey();

        switch (key) {
            case 'w':
                player.up();
                break;
            case 'a':
                player.left();
                break;
            case 's':
                player.down();
                break;
            case 'd':
                player.right()
                break;
            case 'q':
                return close();
            default:
                break;
        }

    }
    
})()
