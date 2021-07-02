import { write } from "./terminal";

const SPACE = ' ';
const PLAYER = '*';
const TOP_WALL = '-';
const BOTTOM_WALL = '^'
const SIDE_WALL = '|';

export const makeGrid = (dimX: number, dimY: number, Player: Player) => {
    const draw = () => {
        const player = Player.get();
        
        write('\n')
        for (let y = 0; y < dimY; y++) {
            
            for (let x = 0; x < dimX; x++) {
                
                if (y === player.y && x === player.x) {
                    write(PLAYER)
                }
    
                else if (x === 0 || x === dimX - 1) {
                    write(SIDE_WALL);
                }
    
                else if (y === 0) {
                    write(TOP_WALL)
                }
    
                else if (y === dimY - 1) {
                    write(BOTTOM_WALL)
                }
    
                else write(SPACE);
                
            }
    
            write('\n')
            
        }
    };

    return {
        draw
    }
}