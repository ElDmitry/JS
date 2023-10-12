function doTriangle(maxHeight = 0, symbol = '') {
let lastSym = '';
    for (let height = 0; height < maxHeight; height++){
        lastSym += symbol;
    console.log(lastSym)
}
   }
doTriangle(6,'!')


/// SECOND
function doTriangle(maxHeight = 0, symbol = '') {
    let doSymbol = '';
    let height = 0;
    while (maxHeight > height) {
        height++;
        doSymbol += symbol;
        console.log(doSymbol)
    }
}
doTriangle(10,'&')