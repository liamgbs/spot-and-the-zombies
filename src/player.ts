import { GRID_DIMENSION_X, GRID_DIMENSION_Y } from "./consts";
import { generateUniqueId } from "./utils";

export const makePlayer = (x?: number, y?: number) : Player => {

    const player: PlayerData = {
        id: generateUniqueId(),
        x: x ?? 1,
        y: y ?? 1,
    };

    const get = () => player;

    const up = () => {
         if (player.y > 1) {
             player.y -= 1;
         }
    }

    const down = () => {
        if (player.y < GRID_DIMENSION_Y - 2) {
            player.y += 1;
        }
    }

    const left = () => {
        if (player.x > 1) {
            player.x -= 1;
        }
    }

    const right = () => {
        if (player.x < GRID_DIMENSION_X - 2) {
            player.x += 1;
        }
    }

    return {
        get,
        up,
        down,
        left,
        right
    }
}