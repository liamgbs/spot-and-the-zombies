import { getRandomX, getRandomY } from "./utils";

export const makePickups = () : Pickups => {
    let pickups : Pickup[] = [];

    const addPill = () => {
        pickups.push({
            type: "pill",
            id: Math.random().toString(),
            points: 100,
            x: getRandomX(),
            y: getRandomY()
        });
    }

    const get = () => pickups;
    const remove = (id: string) => pickups = pickups.filter(pu => pu.id !== id);

    return {
        get,
        remove,
        addPill,
    }
}