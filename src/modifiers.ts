export const makeModifiers = () : Modifiers => {
    const modifiers : ModifierData = {
        isDangerousUntil: undefined
    }

    let modifierFns : Array<(gd: GameData) => boolean | void> = [];

    const makePlayerDangerousUntil = (moves: number) => {
        modifiers.isDangerousUntil = moves;
        
        modifierFns.push((gameData) => {
            if (!modifiers.isDangerousUntil) return true;
            if (gameData.moves >= modifiers.isDangerousUntil) {
                modifiers.isDangerousUntil = undefined;
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