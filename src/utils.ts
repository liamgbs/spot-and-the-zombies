import { GRID_DIMENSION_X, GRID_DIMENSION_Y } from "./consts"

export const generateUniqueId = () => {
    return Math.random().toString()
}

export const getRandomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getRandomX = () => getRandomNumberBetween(1, GRID_DIMENSION_X - 2);
export const getRandomY = () => getRandomNumberBetween(1, GRID_DIMENSION_Y - 2);


export const inSamePosition = (thing1: Position, thing2: Position) => {
    return thing1.x === thing2.x && thing1.y === thing2.y
}