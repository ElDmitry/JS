function checkProbabilityTheory(amount = 0) {
    let pair = 0;
    let unpair = 0;
    for ( let number = 1; number <= amount; number++) {
        let rnd = randomAmount(100,1001);
        console.log(rnd)
if (rnd % 2 === 0){
    pair += 1;
}
else {
    unpair += 1;
}
    }
    console.log('Кількість парних чисел =', pair)
    console.log('Кількість непарних чисел =', unpair)
    console.log('% співвідношення парних= ',  pair * 100 / amount + '%')
    console.log('% співвідношення непарних= ',  unpair * 100 / amount + '%')
}
function randomAmount(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

checkProbabilityTheory(5)




