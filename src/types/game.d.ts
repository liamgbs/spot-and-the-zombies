interface PlayerData {
    x: number;
    y: number;
}
interface Player {
    up():void;
    down():void;
    left():void;
    right():void;
    get():PlayerData
}