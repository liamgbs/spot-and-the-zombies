import { generateUniqueId, getRandomX, getRandomY } from "./utils";

export const makePickups = () : Pickups => {
    let pickups : Pickup[] = [];

    const generateCommon = () : Pick<Pickup, "id" | "x" | "y"> => {
        return {
            id: generateUniqueId(),
            x: getRandomX(),
            y: getRandomY()
        }
    }

    const addPill = () => {
        pickups.push({
            type: "pill",
            points: 100,
            ...generateCommon()
        });
    }

    const addSword = () => {
        if (!!pickups.find(p => p.type === "sword")) return;
        pickups.push({
            type: "sword",
            ...generateCommon()
        });
    }

    const get = () => pickups;
    const remove = (id: string) => pickups = pickups.filter(pu => pu.id !== id);

    return {
        get,
        remove,
        addPill,
        addSword
    }
}