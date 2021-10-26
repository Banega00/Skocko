const signs = ['❤️','♣️','♦️','♠️','⭐','😂']

const createRandomCombination = () => {
    return new Array(4).fill(0).map(number => signs[Math.floor(Math.random()*6)])
}

const targetCombination = createRandomCombination();
console.log("TARGET COMBINATION: ", targetCombination)
let numberOfTries = 0;

function checkCombination(combination, target = targetCombination ){
    const copyOfTargetCombination = target.slice()
    numberOfTries++;
    if(combination.length!=4 || copyOfTargetCombination.length!=4){
        throw new Error("Combinations have to have 4 signs")
    }

    const result = {
        red:0,
        yellow:0
    }

    //check for exact matching (red)
    for(i=0; i<4; i++){
        if(combination[i] == copyOfTargetCombination[i]){
            result.red++;
            combination[i]=null;
            copyOfTargetCombination[i]=null;
        }
    }
    
    for(i=0; i<4; i++){
        if(combination[i]==-1)continue
        for(j=0; j<4 ;j++){
            if(i==j || combination[i]==null && copyOfTargetCombination[j]==null)continue;
            if(combination[i] == copyOfTargetCombination[j]){
                result.yellow++;
                combination[i]=null;
                copyOfTargetCombination[j]=null;
            }
        }
    }


    console.log(`Try number ${numberOfTries}: `, result)
    if(result.red==4){
        console.log("YOU GOT THE CORRECT COMBINATION ",'✅')
        process.exit(1)
    }
    return result;
}
module.exports = {
    checkCombination: checkCombination
}




// console.log(checkCombination(['♣️','♣️','♦️','♠️']))










//////////////
