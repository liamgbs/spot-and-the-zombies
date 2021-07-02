export const makePlayer = (dimX: number, dimY: number) : Player => {

    const player: PlayerData = {
        x: 1,
        y: 1,
    };

    const get = () => player;

    const up = () => {
         if (player.y > 1) {
             player.y -= 1;
         }
    }

    const down = () => {
        if (player.y < dimY - 2) {
            player.y += 1;
        }
    }

    const left = () => {
        if (player.x > 1) {
            player.x -= 1;
        }
    }

    const right = () => {
        if (player.x < dimX - 2) {
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