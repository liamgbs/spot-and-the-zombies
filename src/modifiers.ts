export const makeModifiers = () : Modifiers => {
    const modifiers : ModifierData = {
        isDangerous: false
    }

    let modifierFns : Array<(gd: GameData) => boolean | void> = [];

    const makePlayerDangerousUntil = (moves: number) => {
        modifiers.isDangerous = true;
        modifierFns.push((gameData) => {
            if (gameData.moves === moves) {
                modifiers.isDangerous = false;
                return true;
            }
        })
    }

    // if function returns true, its finished and needs to be removed
    const runModifiers = (gameData: GameData) => {
        console.log(modifierFns.length);
        
        modifierFns = modifierFns.filter(fn => !fn(gameData));
    };

    const getData = () => modifiers

    return {
        makePlayerDangerousUntil,
        runModifiers,
        getData
    }
}