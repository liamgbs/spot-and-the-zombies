import { GRID_DIMENSION_X, GRID_DIMENSION_Y } from "./consts"

export const getRandomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getRandomX = () => getRandomNumberBetween(1, GRID_DIMENSION_X - 2);
export const getRandomY = () => getRandomNumberBetween(1, GRID_DIMENSION_Y - 2);