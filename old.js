const CHOIX = {
    pierre:1,
    feuille:2,
    ciseau:3,
}

function isWin(player,opponent){
    if (!Object.keys(CHOIX).includes(player) || !Object.keys(CHOIX).includes(opponent)) {
        return undefined;
    }
    if(CHOIX[player]===CHOIX[opponent]) return null;
    switch(CHOIX[player]){
        case CHOIX.pierre:
            return CHOIX[opponent]===CHOIX.feuille?false:true;
        case CHOIX.feuille:
            return CHOIX[opponent]===CHOIX.ciseau?false:true;
        case CHOIX.ciseau:
            return CHOIX[opponent]===CHOIX.pierre?false:true;
    }
}

function main(player,opponent){
    let playerWin=isWin(player,opponent);
    if(playerWin===undefined) console.log("Un des input n'est pas valable!");
    else if(playerWin===null)console.log("Egalité!");
    else if(playerWin)console.log("Player a gagné!");
    else console.log("Player a perdu");
}
function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function auto(player,opponent){
    let playerWin=isWin(Object.keys(CHOIX)[player],Object.keys(CHOIX)[opponent]);
    if(playerWin===undefined) console.log("Un des input n'est pas valable!");
    else if(playerWin===null)console.log("Egalité!");
    else if(playerWin)console.log("Player a gagné!");
    else console.log("Player a perdu");
}