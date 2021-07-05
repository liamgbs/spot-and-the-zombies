interface Position {
    x: number;
    y: number;
}

interface PlayerData extends Position { }
interface Player {
    up(): void;
    down(): void;
    left(): void;
    right(): void;
    get(): PlayerData
}

interface Zombies {
    get(): Player[];
    move(): void;
}

interface GameData {
    moves: number;
    points: number;
}
interface Game {
    getData(): GameData;
    tick(key: string): void;
    hasLost(): boolean;
}

type Pickup = Position & { id: string } & (
    | { type: "pill", points: number }
)
    
interface Pickups {
    get(): Pickup[];
    addPill():void;
    remove(id: string): void;
}