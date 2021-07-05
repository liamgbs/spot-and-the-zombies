export const makeGame = (Player: Player, Zombies: Zombies, Pickups: Pickups) : Game => {

    const gameData : GameData = {
        points: 0,
        moves: 0,
    }

    Pickups.addPill();
    
    const hasLost = () => {
        const player = Player.get();

        for (const Zombie of Zombies.get()) {
            const zombie = Zombie.get();
            if (zombie.x === player.x && zombie.y === player.y) {
                return true;
            }
        }

        return false;
    }

    const tick = (key: string) => {
        
        const player = Player.get();

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

        Zombies.move();

        Pickups.get().forEach((pickup)=>{
            if (!(player.x === pickup.x && player.y === pickup.y)) return;

            switch (pickup.type) {
                case "pill":
                    gameData.points += pickup.points;
                    Pickups.addPill();
                    break;
                default:
                    break;
            }

            Pickups.remove(pickup.id);
        });

        gameData.moves += 1;

    }

    const getData = () => gameData

    return {
        tick,
        hasLost,
        getData
    }
}