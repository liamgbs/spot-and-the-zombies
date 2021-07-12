interface Position {
    x: number;
    y: number;
}

interface PlayerData extends Position { 
    id: string;
}
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
    kill(id: string): void;
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
    | { type: "pill"; points: number }
    | { type: "sword";  }
)
    
interface Pickups {
    get(): Pickup[];
    addPill():void;
    addSword():void;
    remove(id: string): void;
}

interface ModifierData {
    isDangerous: boolean
}

interface Modifiers {
    makePlayerDangerousUntil(moves: number):void;
    runModifiers(gameData: GameData):void;
    getData():ModifierData
}